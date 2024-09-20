"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { useCreateWorkspaceModal } from "../store/use-create-workspace-modal";
import { useCreateWorkspace } from "../api/use-create-workspace";
import router from "next/router";

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const { mutate, isPending } = useCreateWorkspace();

  const handleClose = () => {
    setOpen(false);
    // TODO: redirect to workspace
  };

  const handleSubmit = async() => {
    try {
        const data = await mutate(
            {
              name: "Workspace 1",
            },
            {
              onSuccess: (data) => {
                // TODO: redirect to workspace id
                router.push(`/workspaces/${data}`);
              },
              onError: () => {
                //show toast error
              },
              onSettled: () => {
                //Reset form
              },
            });
    } catch (error) {

    }
     
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <form className="space-y-4">
            <Input
              value=""
              disabled={false}
              required
              autoFocus
              minLength={3}
              placeholder="Workspace name e.g. 'Work', 'Personal', 'Home'"
            />

            <div className="flex justify-end">
              <Button disabled={false}>Create</Button>
            </div>
          </form>
          <DialogTitle>Create Workspace</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
