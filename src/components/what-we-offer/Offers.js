import React from 'react'
import './Offers.css';

const Offers = () => {
  return (
    <div className='w-full h-auto py-5 px-40'>
        <div className='w-full flex py-20 px-16 gap-5 offers-bg z-10 opacity-100 rounded-lg shadow-xl'>
            
            <div className='z-50 flex flex-col w-2/4 gap-5'>
                <h3 className='text-4xl text-black font-bold'>What we offer:</h3>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl text-black font-bold'>Clinical Development</h3>
                    <p className='text-sm text-black text-justify'>
                        Our MDs can also help leading Data Safety Monitoring Board meetings. 
                        We provide Data Analysis and Interpretation services, including medical 
                        monitoring, medical data review, preparation of reports and slides 
                        presentations, and all meeting related activities.
                    </p>
                    
                    
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl text-black font-bold'>Medical Affairs</h3>
                    <p className='text-sm text-black text-justify'>
                        In addition, we provide medical monitoring services. Our team has experience 
                        in both, early and late-stage development, and has been involved in pivotal 
                        trials which ended in an FDA approval.
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl text-black font-bold'>PV / Drug Safety</h3>
                    <p className='text-sm text-black text-justify'>
                        SMED CR also provides support with any other particular data presentation 
                        (Investigator Meetings, Investors Meetings, etc) or scientific brochures 
                        for training or marketing purposes.
                    </p>
                </div>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-2xl text-black font-bold'>Data Management</h3>
                    <p className='text-sm text-black text-justify'>
                        Our team of experienced medical professionals provides expert advice and 
                        guidance on clinical research studies, drug development, and regulatory compliance.
                    </p>
                </div>
            </div>
            <div className='z-50 w-2/4 flex flex-col gap-5'>
                <div className='flex flex-col gap-3 mt-[60px]'>
                    <h3 className='text-2xl text-black font-bold'>Medical writing</h3>
                    <p className='text-sm text-black text-justify'>
                        We offer comprehensive medical writing services, including protocol 
                        development, clinical study reports, patient informed consent forms, 
                        manuscripts, and all protocol related documents for regulatory submissions.
                    </p>
                </div>
                <div className='flex flex-col gap-3 mt-[20px]'>
                    <h3 className='text-2xl text-black font-bold'>EDC System</h3>
                    <p className='text-sm text-black text-justify'>
                        Our MDs prepare reports that can be tailored by indication, study status 
                        or others. The reports are written from a medical perspective, and then 
                        updated with all market analysis and financial insights.
                    </p>
                    <p>
                        Concise and easily-digestible story of unmet need and market opportunity size 
                        are the basis.
                    </p>
                </div>
                <div className='flex flex-col gap-3 mt-[60px]'>
                    <h3 className='text-2xl text-black font-bold'>Information Technology</h3>
                    <p className='text-sm text-black text-justify'>
                        We offer comprehensive medical writing services, including protocol 
                        development, clinical study reports, patient informed consent forms, 
                        manuscripts, and all protocol related documents for regulatory submissions.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers
