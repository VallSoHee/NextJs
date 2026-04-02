import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { DataTable } from "./data-table"
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
]
const data: Payment[] = [
  {
    id: "1",
    amount: 100,
    status: "pending",
    email: "user@example.com"
  },

  {
    id: "2",
    amount: 200,
    status: "pending",
    email: "user2@example.com"
  }
,
    {
    id: "3",
    amount: 300,
    status: "pending",
    email: "user3@example.com"
  }

]
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function CategoriesPage() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
     
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data}>
            
        </DataTable>
      </CardContent>
      <CardFooter className="flex-col gap-2">
      </CardFooter>
    </Card>
  )
}
