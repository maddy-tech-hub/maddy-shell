public interface IPaymentMethod
{
    void Pay(decimal amount);
}

public class CreditCard : IPaymentMethod
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using Credit Card.");
    }
}

public class DebitCard : IPaymentMethod
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using Debit Card.");
    }
}

public class PayPal : IPaymentMethod
{
    public void Pay(decimal amount)
    {
        Console.WriteLine($"Paid {amount} using PayPal.");
    }
}

public class BankService
{
    private readonly IPaymentMethod _paymentMethod;

    // Dependency Injection via Constructor
    public BankService(IPaymentMethod paymentMethod)
    {
        _paymentMethod = paymentMethod;
    }

    public void MakePayment(decimal amount)
    {
        _paymentMethod.Pay(amount);
    }
}

public class Program
{
    public static void Main()
    {
        // Using runtime polymorphism and Dependency Injection
        IPaymentMethod creditCard = new CreditCard();
        BankService bankServiceWithCreditCard = new BankService(creditCard);
        bankServiceWithCreditCard.MakePayment(100);

        IPaymentMethod debitCard = new DebitCard();
        BankService bankServiceWithDebitCard = new BankService(debitCard);
        bankServiceWithDebitCard.MakePayment(50);

        IPaymentMethod payPal = new PayPal();
        BankService bankServiceWithPayPal = new BankService(payPal);
        bankServiceWithPayPal.MakePayment(200);
    }
}
