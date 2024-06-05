
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function chat() {
  return (
    <div className="flex flex-col h-[80vh] max-w-2xl mx-auto border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage alt="User 1" src="/placeholder-user.jpg" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">John Doe</div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Online</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button size="icon" variant="ghost">
            <PaperclipIcon className="w-5 h-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button size="icon" variant="ghost">
            <SmileIcon className="w-5 h-5" />
            <span className="sr-only">Send emoji</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-end gap-3 justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg rounded-br-none max-w-[70%]">
            Hey, how\'s it going?
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage alt="User 1" src="/placeholder-user.jpg" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-end gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage alt="User 2" src="/placeholder-user.jpg" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg rounded-bl-none max-w-[70%]">
            I\'m doing great, thanks for asking!
          </div>
        </div>
        <div className="flex items-end gap-3 justify-end">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg rounded-br-none max-w-[70%]">
            That\'s awesome, I\'m glad to hear it. Did you have any plans for the weekend?
          </div>
          <Avatar className="w-8 h-8">
            <AvatarImage alt="User 1" src="/placeholder-user.jpg" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex items-end gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage alt="User 2" src="/placeholder-user.jpg" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg rounded-bl-none max-w-[70%]">
            I was thinking of going to the park for a picnic, would you like to join?
          </div>
        </div>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 px-4 py-3 border-t">
        <div className="flex items-center gap-3">
          <Input autoComplete="off" className="flex-1" placeholder="Type your message..." />
          <Button size="icon" variant="ghost">
            <SendIcon className="w-5 h-5" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

function PaperclipIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function SmileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}
