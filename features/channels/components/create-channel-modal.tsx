import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useCreateChannelModal } from "@/features/channels/store/use-create-channel-modal";

export const CreateChannelModal = () => {
  const [open, setOpen] = useCreateChannelModal();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle> Add a channel </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
