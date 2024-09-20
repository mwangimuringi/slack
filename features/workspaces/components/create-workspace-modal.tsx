"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toast } from "sonner";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const CreateWorkspaceModal = () => {
    const router = useRouter();
  const [open, setOpen] = useCreateWorkspaceModal();
  const [name, setName] = useState("");

  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    setName("");
    // TODO: redirect to workspace
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    // try {
    //     const data = await mutate(
    //         {
    //           name: "Workspace 1",
    //         },
    //         {
    //           onSuccess: (data) => {
    //             // TODO: redirect to workspace id
    //             router.push(`/workspaces/${data}`);
    //           },
    //           onError: () => {
    //             //show toast error
    //           },
    //           onSettled: () => {
    //             //Reset form
    //           },
    //         });
    // } catch (error) {

    // }
    e.preventDefault();

    mutate({ name }, {
       onSuccess(id) {
           Toast.success("Workspace created");
           router.push(`/workspace/${id}`);
           handleClose();
       }
    })
  
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={isPending}
              required
              autoFocus
              minLength={3}
              placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
            />

            <div className="flex justify-end">
              <Button disabled={isPending}>Create</Button>
            </div>
          </form>
          <DialogTitle>Create Workspace</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
