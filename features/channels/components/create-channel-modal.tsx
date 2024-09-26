import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

import { useCreateChannelModal } from "@/features/channels/store/use-create-channel-modal";
import { useCreateChannel } from "../api/use-create-channel";

export const CreateChannelModal = () => {
  const router = useRouter()

  const workspaceId = useWorkspaceId()

  const [open, setOpen] = useCreateChannelModal()
  const [name, setName] = useState('')

  const { mutate, isPending } = useCreateChannel()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '-').toLowerCase()
    setName(value)
  }

  const handleClose = () => {
    setOpen(false)
    setName('')
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    mutate(
      { name, workspaceId },
      {
        onSuccess(id) {
          handleClose()
          toast.success('Channel created')
          router.push(`/workspace/${workspaceId}/channel/${id}`)
        },
        onError() {
          toast.error('Failed to create channel')
        },
      },
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className='bg-white'>
        <DialogHeader>
          <DialogTitle>Add a channel</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <form className='space-y-4' onSubmit={handleSubmit}>
          <Input
            disabled={isPending}
            value={name}
            onChange={handleChange}
            required
            autoFocus
            placeholder='Channel name'
            minLength={3}
            maxLength={80}
          />
          <div className='flex justify-end'>
            <Button disabled={isPending} type='submit'>
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}