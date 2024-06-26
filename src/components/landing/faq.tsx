import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface IFaq {
  value: string;
  description: string;
}

function Faq() {
  const items: IFaq[] = [
    {
      value: 'Does Triplay have weather information and local recommendations?',
      description: 'For each city and route, Triplay travel planner provides a set of practical tips that will improve the quality of your trip. Additionally, there is information on the weather forecast for the dates of your trip, which will allow you to prepare the right clothes for traveling. As well as the size of the average check in a restaurant, which will allow you to plan your travel budget.'
    },
    {
      value: 'What options does the travel planner have if there is no internet connection?',
      description: 'Triplay features the ability to download as a pdf-document any of the travel plans you\'ve created. This way you can stick to your pre-made itinerary, and as soon as you have internet access, you can get right back to the process of improving your travel plan. You can also share your travel itinerary with your family or friends at any time.'
    },
    {
      value: 'Can I use Triplay for free?',
      description: 'Every user has the opportunity to start planning trips with a basic tariff. You do not need to enter your bank card details. It is enough to pass a quick registration through your e-mail address and you will get the opportunity to create three travel itineraries to absolutely any city with a duration of two days each. By paying Premium subscription you get access to Triplay\'s extended functionality and unlimited number of travel plans. Each user has the option to renew the Premium subscription every month, or pay for a year at once.'
    },
    {
      value: 'When should you start planning a trip?',
      description: 'It is best to start the planning process at least a couple of months before the trip. This will allow you to buy tickets and book a hotel at a more attractive price. You can add information about your hotel to your travel plan and Triplay will optimize your itinerary as much as possible. If you are already traveling, Triplay can still be useful for you. The travel planner will suggest interesting attractions and it can qualitatively improve your vacation.'
    },
  ]

  return (
    <section id='faq' className='faq'>
      <div className='faq-grid'>
        <div className='faq-title'>
          FAQs
        </div>
        <div className='faq-content'>
          <Accordion type="single" collapsible className="w-full">
            { items.map((item) => (
              <AccordionItem key={ item.value } value={ item.value }>
                <AccordionTrigger>{ item.value }</AccordionTrigger>
                <AccordionContent className='p-4'>{ item.description }</AccordionContent>
              </AccordionItem>
            )) }
          </Accordion>
        </div>
      </div>
    </section>
  )
}

export default Faq;
