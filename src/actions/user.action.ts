"use server";

import prisma from "@/lib/prisma";
import { auth, currentUser } from "@clerk/nextjs/server";
import { error } from "console";


export async function syncUser() {
  try {
    const {userId} = await auth();
    const user = await currentUser();

    if(!userId || !user) return;

    // check if user already exists
    const existingUser = await prisma.user.findFirst({
      where: { clerkId: userId }
    });

    if(existingUser) return existingUser; // user already exists, no need to sync it again.


    const dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        name: `${user.firstName || ""} ${user.lastName || ""}`,
        username: user.username ?? user.emailAddresses[0].emailAddress.split("@")[0],
        email: user.emailAddresses[0].emailAddress,
        image: user.imageUrl,

      }
    });

    return dbUser;
  } catch (error) {
    console.log("Error syncing user", error);
  }
}

export async function getUserByClerkId(clerkId: string){
  return prisma.user.findUnique({
    where: { 
      clerkId: clerkId,
    },
    include: {
      _count: {
        select: {
          followers: true,
          following: true,
          posts: true,
        }
      }
    }
  })
}

export async function getDbUserId() {
  const {userId:clerkId} = await auth();

  if(!clerkId) throw new Error("User Unauthorized");

  const user = await getUserByClerkId(clerkId);

  if(!user) throw new Error("User not found");

  return user.id;
}