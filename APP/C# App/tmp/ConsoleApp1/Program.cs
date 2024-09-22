// See https://aka.ms/new-console-template for more information

using System.Xml.Linq;

public class WeatherForecast
{
    public System.DateTime Date { get; set; } = DateTime.Now;
    public int TempC { get; set; } = 16;
    public int TempF => 32 + (int)(TempC / 0.5556);
    public string Summary { get; set; } = "Poletje";

};

public class d2Index
{
    public int index { get; set; }
    public int vrednost { get; set; }
}


public class Program
{
    public static void Main(string[] args)
    {
        //preprost IEnumerable <int> pirmer
        Random random = new Random(); // Ustvari nov primer razreda Random
        IEnumerable<d2Index> listInt = Enumerable.Range(1,8).Select(index =>new d2Index { index= index, vrednost=random.Next(0,10)});
        foreach (var element in listInt)
        {
            Console.WriteLine(element.index + "  "+element.vrednost);
        }


        // Primer iz WeatherForecast 

        string[] Summaries = new[] {
            "Freezing","Bracing","Chilly","Cool","Mild","Warm","Balmy","Hot","Sweltering","Scorching"
        };

        IEnumerable<WeatherForecast> listWeather= Enumerable.Range(1, 8).Select(index=>new WeatherForecast { 
            Date = DateTime.Now,
            TempC=16,
            Summary= Summaries[Random.Shared.Next(Summaries.Length)]
        });
        foreach (var element in listWeather)
        {
            Console.WriteLine(element.Date + "  " + element.TempC+" " +element.TempF + "; "+ element.Summary);
        }

    } 
}
