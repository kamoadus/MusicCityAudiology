const accordionItems = [
    { 
      header: "Hearing Loss", 
      content: [
        { question: "I only have trouble in group settings and noisy environments. Should I get my hearing checked?", answer: "Group settings and noisy places are difficult communication environments. This is a primary complaint for many people. A hearing evaluation is recommended to identify any amount of hearing loss." },
        { question: "Can hearing loss lead to cognitive decline?", answer: "This is a complex question and a common concern for many of my patients. There is extensive research correlating hearing loss and cognitive impairment. Even mild hearing loss is a risk factor for cognitive decline. Hearing aids can slow the natural progression of decline with aging. Furthermore, hearing loss leads to social isolation which can contribute to dementia." },
      ]
    },
    { 
      header: "Tinnitus", 
      content: [
        { question: "What should I do if I have tinnitus (e.g. ringing, buzzing, etc.) in my ears/head?", answer: "A great starting point is to schedule an Audiology Consult which includes a hearing test. We will discuss the results and explain potential causes of tinnitus." },
        { question: "How can I prevent tinnitus and hearing loss?", answer: "There are many factors that can lead to tinnitus and/or hearing loss (genetics, medications, underlying health issues, noise exposure, etc.). Reducing the amount of noise exposure and using hearing protection when exposed to loud sound can assist in reducing the chances of developing tinnitus and/or hearing loss." },
        { question: "Will hearing aids help my tinnitus?", answer: "While some people have tinnitus without identified hearing loss, many individuals with tinnitus also have hearing loss. Treating hearing loss and giving your brain access to the sound it has been missing can help reduce the perception of the noise. Additionally, I can create a tinnitus ‘masker’ program in the hearing aid settings to assist in the treatment process." },
        { question: "Is there a cure for tinnitus?", answer: "Identifying a possible underlying condition is helpful, but there is no “cure” for tinnitus. Learning your triggers and developing coping mechanisms is essential for tinnitus management." }
      ]
    },
    { 
      header: "Music", 
      content: [
        { question: "Can you help me with in-ear monitors?", answer: "I can take earmold impressions for you to send to an in-ear company of your choice. I can also clean your devices for you." },
        { question: "The foam earplugs make me feel stopped up. Are there better options?", answer: "I never recommend foam plugs unless that is your only available option. For musicians, stage crew and concert-goers, I offer custom and universal fit plugs specifically designed to block out the loud impulse sounds while still giving you access to the clarity." },
        { question: "What are musician plugs?", answer: "The musician plugs I offer come in custom or universal options. Both styles come with a filter specifically designed for musicians and music lovers. You can still hear clearly, but are better protected from louder impulse sounds." }
      ]
    },
    { 
        header: "Noise Exposure", 
        content: [
          { question: "How loud is too loud?", answer: "In general, you want to limit the amount of time you are exposed to certain loud sounds because that noise can cause temporary or even permanent hearing loss. Noise exposure follows a time-intensity trade-off (see the next question)." },
          { question: "What is the time-intensity trade-off?", answer: "The National Institute for Occupational Safety and Health (NIOSH) has calculated the Recommended Exposure Limit (REL) as 85 decibels as an 8-hr time weighted average (TWA). With every 3 decibel increase, the exposure time should be cut in half." },
          { question: "NIOSH Noise Chart", answer: "Check out this link <a href='./contact.html'>click here to contact me</a> for a copy of the Time-Intensity trade-off chart."},
          { question: "How can I protect my ears?", answer: "The world is a loud and noisy place. There are many environments and recreational activities that are harmful to your ears. There are also some sounds that are simply bothersome. Some examples include construction and factory sites, motorsports, hunting, traveling (airplanes), and sleeping (snoring). I can fit you with earplugs for any environment." }
        ]
    },
    { 
        header: "Earwax", 
        content: [
          { question: "What is the best way to remove earwax?", answer: "Most people cannot remove earwax successfully on their own. I have tools to assist with visualizing the wax build-up and identifying important anatomical structures in the ear canal leading up to the eardrum." },
          { question: "What do you use to remove earwax?", answer: "There are three primary methods for removal. Irrigation (water), suction, and mechanical (lighted curette). Understanding the age, amount, and depth of the wax is important in successful removal." },
          { question: "Can I use a solution to remove the wax?", answer: "Solutions such as hydrogen-peroxide and other cerumenolytics are helpful in breaking wax off of the ear canal walls to better assist with the removal." }
        ]
    },
    { 
        header: "Hearing Aids", 
        content: [
          { question: "I have hearing loss, but I do not feel like I need hearing aids. Should I wait?", answer: "Once hearing loss is identified, it is not going to improve [for many]. In the long run, it is better to treat hearing loss sooner rather than later in order to allow your brain to adjust and get used to the sounds it has been missing." },
          { question: "Will my hearing loss stabilize and/or stop declining once I wear hearing aids?", answer: "Every case is different and hearing aids are not meant to stop the actual degeneration of your hearing. I have seen hearing aid users with stable hearing for years and others that need adjustments due to further decline." },
          { question: "There are so many advertisements and options out there. How do I know what is right for me?", answer: "During an Audiology Consult, I will get to understand your lifestyle and listening environments. There is not a “one size fits all” option. My goal is to prescribe devices that fit your lifestyle and needs." },
          { question: "Why do some people have a hard time adjusting to hearing aids?", answer: "This is another complex question. Hearing aids take time to adjust to - physically and mentally. It takes consistent and continuous use for your brain to adapt to the sound it has been missing out on. It also takes time to develop the new skills associated with manipulating the device and properly inserting it into your ears." },
          { question: "Can you service hearing aids that were not prescribed by you?", answer: "Yes, I am able to troubleshoot, clean, and help with any devices. I might not have access to some supplies depending on the brand of your devices." },
          { question: "Can you program my hearing aids that were not prescribed by you?", answer: "I only work with one manufacturer (Phonak) and do not have access to other programming software at this time." },
          { question: "Can you help connect to my phone and television?", answer: "Yes, I can assist with any devices that have Bluetooth connectivity." },
          { question: "What type of hearing aids do you dispense?", answer: "The style of hearing aid I prescribe will best fit your hearing loss, ear size/shape and lifestyle. I offer custom and over-the-ear styles. Some available features include Bluetooth and rechargeable options." },
          { question: "What brands of hearing aids do you work with?", answer: "Major brands include Oticon, Phonak, Resound, Signia, Starkey, and Widex." }
        ]
    },
    { 
        header: "Insurance", 
        content: [
          { question: "Are your services covered by insurance?", answer: "Some of the services might be covered, but the majority of services I offer are not typically covered by insurance." },
          { question: "Do you file to insurance?", answer: "I am a Medicare provider and some services call be filed to insurance. Consult your insurance carrier for more information on submitting claims." },
          { question: "What does “Unbundled” mean?", answer: "Unbundled services means that you only pay for what you need." }
        ]
    }
  ];
  
  function createAccordionItem(header, content, index, isExpanded) {
    const accordionItem = `
      <div class="accordion-item">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button ${isExpanded ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${isExpanded ? 'true' : 'false'}" aria-controls="collapse${index}">
            ${header}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse ${isExpanded ? 'show' : ''}" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
          <div class="accordion-body">
            ${content.map(({ question, answer }) => `
              <div>
                <h4>${question}</h4>
                <p>${answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    return accordionItem;
}

function renderAccordionItems(items) {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');

    items.forEach((item, index) => {
        const isExpanded = index === 0; // Expand the first item by default
        const accordionItem = createAccordionItem(item.header, item.content, index, isExpanded);
        if (index % 2 === 0) {
            column1.innerHTML += accordionItem;
        } else {
            column2.innerHTML += accordionItem;
        }
    });
}

renderAccordionItems(accordionItems);