import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

import { api } from '../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
}

const TransactionsContext = createContext({} as TransactionsContextType)

interface TransactionsProviderProps {
  children: ReactNode
}

export function useTransactionsContext() {
  return useContext(TransactionsContext)
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await api.get('transactions')

    setTransactions(response.data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
