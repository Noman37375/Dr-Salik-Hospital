import os
from dotenv import load_dotenv
from pinecone import Pinecone, ServerlessSpec
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.vectorstores import Pinecone as LangchainPinecone

# Load environment variables
load_dotenv()

# Initialize OpenAI API key
os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

def init_pinecone():
    try:
        # Initialize Pinecone client
        pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
        
        # Initialize embeddings with specific model
        embeddings = OpenAIEmbeddings(
            model="text-embedding-ada-002",
            openai_api_key=os.getenv("OPENAI_API_KEY")
        )

        # Hospital data
        hospital_data = """
        Dr. Salik Hospital Information:
        
        Address: St-2, Sector V4, Gulshan-e-Maymar, Karachi, Pakistan
        Contact Numbers: 021-36412790, 021-36412791, 021-36412792, 021-36412793, 0317-7843816
        Website: www.drsalikhospital.com
        Additional Services: EPI Vaccination program available on Fridays and Saturdays from 5:00 PM to 7:00 PM.

        Consultant Schedule:

        1. Dr. Syed Zafar Salik
        - Qualifications: MBBS (Dow University of Health Sciences, Pakistan), MD (USA), Diplomate in Internal Medicine and Infectious Diseases, Adult & Child Psychiatrist
        - Specialty: Adult and Child Psychiatry
        - Availability: Tuesdays, 11:00 AM to 1:00 PM (pre-appointment required)
        - Consultation Fee: PKR 2000
        - Notes: Specializes in mental health for adults and children, addressing conditions like anxiety, depression, and developmental disorders.

        2. Dr. Moiz Ullah Khan
        - Qualifications: MBBS, MRCS (Royal College of Surgeons, Glasgow, UK), FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: ENT (Ear, Nose, and Throat), Head & Neck Surgeon
        - Availability: Saturdays, 3:00 PM to 4:00 PM
        - Consultation Fee: PKR 1200
        - Notes: Focuses on ENT conditions, including sinus issues, hearing loss, and head/neck tumors, with surgical expertise.

        3. Dr. Hassan Imam
        - Qualifications: MBBS, DIPCARD (Diploma in Cardiology, USA), MD (Internal Medicine), Cardiologist
        - Specialty: Cardiology
        - Availability: Wednesdays and Fridays, 6:00 PM to 7:00 PM
        - Consultation Fee: PKR 1500
        - Notes: Provides cardiac care, including diagnosis and management of heart diseases like hypertension and heart failure.

        4. Dr. Basit Ansari
        - Qualifications: MBBS, FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Neurosurgery
        - Availability: Daily, on-call basis (contact hospital for availability)
        - Consultation Fee: PKR 1500
        - Notes: Available for emergency neurosurgical consultations, including brain and spinal surgeries.

        5. Dr. Sidrah Abbas
        - Qualifications: MBBS, FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Gynecology
        - Availability: Tuesdays and Thursdays, 4:00 PM to 5:00 PM
        - Consultation Fee: PKR 1200
        - Notes: Provides gynecological care, focusing on women's reproductive health.

        6. Dr. Saleha Siddiqui
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan), FCPS, MRCOG (Member of the Royal College of Obstetricians and Gynaecologists, UK)
        - Specialty: Gynecology
        - Availability: Mondays, Tuesdays, and Wednesdays, 11:30 AM to 1:00 PM; Thursdays and Fridays, 5:00 PM to 6:30 PM
        - Consultation Fee: PKR 1200
        - Notes: Experienced in obstetrics, offering care for pregnancy and gynecological surgeries.

        7. Dr. Tehzeeb Kiran
        - Qualifications: MBBS, FCPS (Obstetrics and Gynecology)
        - Specialty: Gynecology
        - Availability: Saturdays, 5:00 PM to 5:30 PM
        - Consultation Fee: PKR 1200
        - Notes: Specializes in maternal health and delivery services.

        8. Dr. Sana
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Gynecology
        - Availability: Mondays to Saturdays, 7:00 PM to 9:00 PM
        - Consultation Fee: PKR 1000
        - Notes: Offers evening consultations for women's health, accessible for working patients.

        9. Dr. Adnan Hashmi
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan), Consultant Radiologist, Visiting Fellow in Radiology (Non-Vascular Interventions)
        - Specialty: Radiology
        - Availability: Daily, on-call basis with pre-ultrasound appointment
        - Consultation Fee: Varies depending on ultrasound procedure
        - Notes: Specializes in diagnostic imaging, including ultrasound and non-vascular interventions.

        10. Dr. Yasir Ahmed
        - Qualifications: MBBS, FCPS (Medicine)
        - Specialty: Diabetology
        - Availability: Tuesdays, Thursdays, and Saturdays, 5:00 PM to 6:00 PM
        - Consultation Fee: PKR 800
        - Notes: Focuses on diabetes management, treating type 1 and type 2 diabetes.

        11. Dr. Salman Ahmed Siddiqui
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Orthopedic Surgery
        - Availability: Mondays and Saturdays, 4:00 PM to 6:00 PM
        - Consultation Fee: PKR 1200
        - Notes: Provides orthopedic care, including fracture management and joint replacements.

        12. Dr. Faiz Pasha
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Urology
        - Availability: Daily, on-call basis (contact hospital for availability)
        - Consultation Fee: PKR 1500
        - Notes: Specializes in urological conditions like kidney stones and prostate issues.

        13. Dr. Subul Rashid
        - Qualifications: MBBS, MCPS (Member of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Pediatrics
        - Availability: Mondays to Fridays, 11:00 AM to 1:00 PM
        - Consultation Fee: PKR 800
        - Notes: Provides pediatric care, including vaccinations and growth monitoring.

        14. Dr. Maaruf Faridi
        - Qualifications: MBBS, FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: General & Laparoscopic Surgery
        - Availability: Mondays to Saturdays, 6:00 PM to 7:00 PM
        - Consultation Fee: PKR 1200
        - Notes: Performs general and minimally invasive laparoscopic surgeries.

        15. Dr. M. Babar
        - Qualifications: MBBS, FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Gastroenterology
        - Availability: Saturdays, 3:00 PM to 5:00 PM
        - Consultation Fee: PKR 1200
        - Notes: Treats digestive health issues like ulcers and liver disease.

        16. Dr. Sharmin
        - Qualifications: MBBS, FCPS (Fellow of the College of Physicians and Surgeons, Pakistan)
        - Specialty: Dermatology
        - Availability: Saturdays, 1:00 PM to 3:00 PM
        - Consultation Fee: PKR 800
        - Notes: Treats skin conditions like acne and psoriasis.

        17. Dr. Aisha
        - Qualifications: BS (Physiotherapy), DPT (Doctor of Physical Therapy)
        - Specialty: Physiotherapy
        - Availability: Mondays to Saturdays, 5:00 PM to 7:00 PM
        - Consultation Fee: PKR 700
        - Notes: Offers physiotherapy for rehabilitation and pain management.

        18. Dr. Rabia Jamil
        - Qualifications: Diploma in Speech Therapy
        - Specialty: Speech Therapy
        - Availability: Thursdays, 3:00 PM to 4:00 PM
        - Consultation Fee: PKR 1500
        - Notes: Assists with speech and communication disorders.
        """

        # Initialize text splitter
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200,
            length_function=len,
        )

        # Split text into chunks
        texts = text_splitter.split_text(hospital_data)

        # Create index if it doesn't exist
        index_name = "n8n"
        existing_indexes = pc.list_indexes()
        
        if index_name not in existing_indexes.names():
            pc.create_index(
                name=index_name,
                dimension=1536,  # OpenAI embeddings dimension
                metric='cosine',
                spec=ServerlessSpec(
                    cloud='aws',
                    region='us-east-1'
                )
            )

        # Get the index
        index = pc.Index(index_name)

        # Initialize Pinecone vector store
        vectorstore = LangchainPinecone(
            index=index,
            embedding=embeddings,
            text_key="text"
        )

        # Upsert texts
        vectorstore.add_texts(texts)

        print("Successfully initialized Pinecone index with hospital data!")
    except Exception as e:
        print(f"Error initializing Pinecone: {str(e)}")
        raise

if __name__ == "__main__":
    init_pinecone() 