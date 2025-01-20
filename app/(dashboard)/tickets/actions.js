"use server"

import { cookies } from "next/headers"
import { createServerActionClient, createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function addTicket(formData) {
    const ticket = Object.fromEntries(formData)

    const supabase = createServerActionClient({cookies})

    const {data: {session}} = await supabase.auth.getSession()

    const {error} = await supabase.from('Tickets').insert({
        ...ticket,
        user_email: session.user.email
    })
    if(error){
        throw new Error('Could not add the new ticket.')
    }

    revalidatePath('/tickets')
    redirect('/tickets')
}


export async function deleteButton(id) {

    const supabase = createServerComponentClient({ cookies });
    const { error } = await supabase.from("Tickets").delete().eq("id", id);
  
    if(error){
        throw new Error('Could not delete the ticket.')
    }

    revalidatePath('/tickets')
    redirect('/tickets')
  }