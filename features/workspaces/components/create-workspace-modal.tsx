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

export const CreateWorkspaceModal = () => {
  const [open, setOpen] = useCreateWorkspaceModal();

  const handleClose = () => {
    setOpen(false);
    // TODO: redirect to workspace
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
