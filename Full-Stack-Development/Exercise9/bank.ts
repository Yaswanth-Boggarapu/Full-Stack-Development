interface AccountHolder<T> {
    name: string;
    accountNumber: T;
    balance: number;
  }
 
  const accountHolders: AccountHolder<string>[] = [
    { name: "Hashirama", accountNumber: "12345", balance: 500 },
    { name: "Madara", accountNumber: "67890", balance: 1000 },
  ];
 
  function withdraw<T>(accountNumber: T, amount: number): void {
    const accountHolder = accountHolders.find(
      (ah) => ah.accountNumber === accountNumber
    );
    if (!accountHolder) {
      console.log("Account not found");
      return;
    }
    if (accountHolder.balance < amount) {
      console.log("Insufficient balance");
      return;
    }
    accountHolder.balance -= amount;
    console.log(`Withdrawn ${amount} from account ${accountHolder.accountNumber}. New balance is ${accountHolder.balance}`);
  }
 
  function credit<T>(accountNumber: T, amount: number): void {
    const accountHolder = accountHolders.find(
      (ah) => ah.accountNumber === accountNumber
    );
    if (!accountHolder) {
      console.log("Account not found");
      return;
    }
    accountHolder.balance += amount;
    console.log(`Credited ${amount} to account ${accountHolder.accountNumber}. New balance is ${accountHolder.balance}`);
  }
 
  function checkBalance<T>(accountNumber: T): void {
    const accountHolder = accountHolders.find(
      (ah) => ah.accountNumber === accountNumber
    );
    if (!accountHolder) {
      console.log("Account not found");
      return;
    }
    console.log(`Account ${accountHolder.accountNumber} has balance ${accountHolder.balance}`);
  }
 
  // Usage
  console.log("Account holders:", accountHolders);
  withdraw("12345", 200);
  credit("67890", 300);
  checkBalance("12345");
 