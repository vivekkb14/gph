import React from 'react';
import './Services.css';
import WhatsAppChat from "../CommonComponents/WhatsappComponent/WhatsappComponent";

const servicesData = [
  {
    title: 'Vaccinations',
    description: 'Routine vaccinations are one of the best ways to protect the health of your pet. We use only well-tested combinations of vaccines to protect against the most serious diseases in our area. Each pet is evaluated for the appropriate vaccinations needed. After the routine puppy and kitten series of vaccinations and the one-year booster shots, we recommend vaccinating for distemper virus and parvovirus for dogs and panleukopenia and upper respiratory viruses for cats every three years.',
    imageUrl: 'https://www.kindnessoftulsa.com/wp-content/uploads/2018/01/dog_vaccination-930x546.jpg'
  },
  {
    title: 'Ultrasound',
    description: 'Ultrasonography is a type of diagnostic technique that uses ultrasound waves to produce an imaging study. This means that when we perform ultrasonography, we can see internal images of the patient’s body. Unlike some other imaging studies, like x-rays, ultrasonography does not use radiation. Instead, ultrasonography uses high-frequency sound (ultrasound) waves to create a picture of what is inside your pet’s body. Ultrasonography is a completely non-invasive, painless way to diagnose and evaluate many common diseases.',
    imageUrl: 'https://vethammond.com/wp-content/uploads/sites/73/2021/04/ultraa.jpg'
  },
  {
    title: 'Surgery',
    description: 'Our state-of-the-art surgical suite provides for the ability to perform a wide variety of surgical procedures. We offer conventional surgery as well as laser surgery and electrosurgery for specific procedures. Laparoscopic surgery (also called minimally invasive surgery) is available for select procedures.',
    imageUrl: 'https://aikenpetvet.com/uploads/SiteAssets/104/images/services/vet-surgery-aiken.jpg'
  },
  {
    title: 'Radiology (X-Rays)',
    description: 'Our on-site, modern digital radiography equipment provides high-quality radiographs to aid in the diagnosis of many disorders and allows us to easily consult with a board certified radiologist via telemedicine. We are certified in PennHip which allows for the early detection of hip dysplasia.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUw44J2cDqRIatZuCbX44mEzfalspKili59KEftA8St7fsU-iEEMgo8ladAGV7R5dPQ5M&usqp=CAU'
  },
  {
    title: 'Puppy And Kitten Care',
    description: 'Do you have a new puppy or kitten? Congratulations on this addition to your family! One of the first things you should do when you bring your new pet home is to introduce him or her to us – your veterinary care team. Puppy and kitten visits offer a unique opportunity to get you and your new pet off on the right foot! Your puppy or kitten visit will include a full “nose-to-tail” physical examination. We will look for any signs of illness and make sure that your new pet is in good health.',
    imageUrl: 'https://cdcssl.ibsrv.net/ibimg/smb/1154x744_80/webmgr/0p/h/m/puppy_kitten.jpg.webp?dd9197ba2d4378d2a831a05ed4f1f6fb'
  },
  {
    title: 'Pharmacy',
    description: 'We maintain an inventory of pharmaceuticals, supplements, shampoos, heartworm preventatives and parasite treatments to meet the needs of your pet. They have all been carefully selected by our Doctors. We will be happy to mail them to you at no additional charge!.',
    imageUrl: 'https://www.tnah.ca/wp-content/uploads/2022/11/vet-selecting-medications-from-shelf-in-veterinary-pharmacy-159615208-57554c6c5f9b5892e86d8bed.jpg'
  },
  {
    title: 'Rhinoscopy',
    description: 'Discharge from the nose, excessive sneezing, reverse sneezing and bleeding from the nose are common symptoms seen in cats and dogs with various nasal and sinus problems. Diagnosing the cause of the problem can be difficult due to the inaccessibility of the nasal passages for direct examination. With rhinoscopy, we can gain direct access to the nasal cavity to visualize the problem and take biopsy samples. During the procedure, the patient is under anesthesia and a fiberoptic endoscope is passed up into the nose and through the nasal cavity. Below is an image of a normal nasal cavity.',
    imageUrl: 'https://d36ai2hkxl16us.cloudfront.net/thoughtindustries/image/upload/course-uploads/b25838a1-1b97-5863-a3d9-66576b57a5d9/airflow-slide-test-0.jpeg'
  },
  {
    title: 'Laboratory',
    description: 'We know that being able to quickly process lab work can lead to quicker diagnosis and treatment for your pet. Our in-house laboratory allows for rapid analysis of routine blood, urine, feces and cytology samples. Blood sample diagnostics evaluates the types and levels of various cells and proteins within the circulation. These results are instrumental in assessing organ function, response to medications and the overall health of your pet. Similarly, urine samples provided key insight into kidney function, possible infections, and progression of chronic conditions such as diabetes or high blood pressure. Fecal results can be screened in-house for signs of parasites or bacterial growth..',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIoxfzZRVRSm1Hltc7Pq-3vAejDhs1bWdbP2Qb25pL0LCPhk-gx_DFFf0mswlPuQ03Xk&usqp=CAU'
  }
];

const ServiceCard = ({ title, description, imageUrl }) => (
  <div className="service-card">
    <img src={imageUrl} alt={title} className="service-image" />
    <h2 className="service-title">{title}</h2>
    <p className="service-description">{description}</p>
  </div>
);

export const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-header">Our Services</h1>
      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
      <div><WhatsAppChat/></div>
    </div>
  );
};

export default Services;
