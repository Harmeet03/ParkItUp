import brand from '../assets/brand.png'

const Conditions = () => {
    return (
        <div className="bg-gray-200 w-full h-screen flex">
            <div className="bg-white w-9/10 h-9/10 m-auto overflow-y-scroll rounded-lg p-5">
                
                <div className='flex items-center m-auto justify-between'>
                    <img src={brand} className='w-15 md:w-20 lg:w-30'/>
                    <p className='text-2xl md:text-5xl'> Parking Booking App </p>
                </div>

                <div className="bg-cyan-600 w-9/10 h-5/6 mt-6 gap-2 m-auto rounded-lg p-5 flex flex-col md:flex-row">
                    <div className='bg-white rounded-lg md:w-1/2 overflow-y-scroll p-4'>
                        <p className='mb-4 text-cyan-600 md:mb-8 text-xl md:text-4xl lg:text-5xl'> Terms & Conditions </p>

                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 1. Introduction </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            These Terms & Conditions “Terms” govern your use of ParkItUp.
                            By using our platform, you agree to comply with and be bound by these Terms. 
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 2. User Account Registration </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            Users must provide accurate information when creating an account.<br/><br/>
                            You are responsible for maintaining the confidentiality of your login details.<br/><br/>
                            Sharing accounts or impersonating others is strictly prohibited.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 3. Booking of Parking Slots </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            Bookings are confirmed only after successful payment.<br/><br/>
                            Once booked, a parking slot becomes unavailable for other users.<br/><br/>
                            Users must ensure correct slot selection before payment.<br/><br/>
                            Admin reserves the right to cancel or modify bookings in exceptional cases.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 4. Payments & Refunds </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            All payments are processed securely through Razorpay.<br/><br/>
                            Payments are non-refundable except in cases of system error or unauthorized booking.<br/><br/>
                            We do not store your card information.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 5. User Responsibilities </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            Users agree:<br/>
                            Not to engage in fraudulent or abusive behavior.<br/><br/>
                            Not to attempt to hack, damage, or interfere with the system.<br/><br/>
                            To use the platform only for legal and legitimate purposes.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 6. Admin Rights </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            Administrators have the right to:<br/>
                            Modify or remove user bookings<br/><br/>
                            Disable user accounts for misuse<br/><br/>
                            Update system features or pricing<br/><br/>
                            Access booking data for management purposes<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 7. Limitation of Liability </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            ParkItUp is not responsible for:<br/>
                            Loss of vehicles or belongings<br/><br/>
                            Payment delays caused by third-party providers<br/><br/>
                            Technical issues due to internet failure or device problems<br/><br/>
                            Incorrect bookings made by the user<br/><br/>
                            Users acknowledge that the system provides only slot reservation, not physical parking security.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 8. Termination of Accounts </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We may suspend or terminate a user's account if:<br/>
                            Terms are violated.<br/><br/>
                            Fraudulent activity is detected.<br/><br/>
                            Misuse or unauthorized system access occurs.<br/><br/>
                            Users may also request account deletion at any time.<br/>
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 9. Intellectual Property </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            All logos, UI design, code, and features of ParkItUp are protected.<br/>
                            Users may not copy, modify, or redistribute without permission.
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 10. Changes to Terms </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We may update these Terms at any time.<br/>
                            Continued use of the service indicates acceptance of updated Terms.
                        </p>
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 11. Governing Law </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                             These Terms are governed by the laws of India.
                        </p>

                    </div>
                    <div className='bg-white rounded-lg md:w-1/2 overflow-y-scroll p-4'>
                        <p className='mb-4 text-cyan-600 md:mb-8 text-xl md:text-4xl lg:text-5xl'> Privacy Policy </p>
                        
                        <p className='mb-2 md:my-4 text-xl md:text-2xl lg:text-4xl'> 1. Introduction </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            ParkItUp (“we”, “us”, “our”) provides a digital platform that allows users to book and manage parking slots.<br/>
                            We are committed to protecting your personal information and maintaining transparency about how it is used.<br/><br/>
                            By using ParkItUp, you agree to the practices described in this Privacy Policy.<br/>
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 2. Information We Collect </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            
                        </p>
                        <p className='mx-8 md:my-4 text-lg md:text-xl lg:text-2xl'> 2.1 Personal Information </p>
                        <p className='mx-8 my-4 text-sm md:text-lg lg:text-xl'> 
                            When you register or use our platform, we may collect:<br/>
                            Name,<br/>
                            Email address,<br/>
                            Username,<br/>
                            Booking history (slot booked, date/time).<br/>
                        </p>
                        <p className='mx-8 md:my-4 text-lg md:text-xl lg:text-2xl'> 2.2 Payment Information </p>
                        <p className='mx-8 my-4 text-sm md:text-lg lg:text-xl'> 
                            We use Razorpay to process payments.<br/>
                            We do not store your card details, CVV, or full transaction data. Razorpay independently handles all payment information under their security standards.<br/>
                            We only store:<br/>
                            Payment ID,<br/>
                            Order ID,<br/>
                            Booking confirmation details.<br/>
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 3. How We Use Your Information </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We use collected data to:<br/><br/>
                            Create and manage user accounts,<br/>
                            Process parking slot bookings,<br/>
                            Verify payments,<br/>
                            Show booking history,<br/>
                            Improve platform functionality,<br/>
                            Provide customer support,<br/>
                            Prevent fraud or unauthorized access<br/>
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 4. Sharing of Information </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We do not sell, rent, or trade your personal data.<br/>
                            We only share data with:<br/><br/>
                            Payment Gateway (Razorpay) - for payment processing,<br/>
                            Service Providers - to host and maintain our backend,<br/>
                            Law Enforcement - only when legally required
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 5. Data Security </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We use industry-standard encryption and security practices to protect your data, including:<br/>
                            HTTPS,<br/>
                            Encrypted passwords (bcrypt),<br/>
                            Secure database access,<br/>
                            Limited admin access controls,<br/>
                            Despite strong measures, no system is 100% secure. Users are advised to protect their login details.<br/>
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 6. Data Retention </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            We retain user and booking data for as long as the account remains active or as required by law.
                            Users may request deletion of their account at any time.
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 7. Your Rights </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            You may:<br/>
                            Access your personal data,<br/>
                            Request correction of incorrect information,<br/>
                            Request deletion of your account,<br/>
                            View your booking history,<br/>
                            Withdraw consent (where applicable)<br/>
                        </p>
                        <p className='md:my-4 text-xl md:text-2xl lg:text-4xl'> 8. Children's Privacy </p>
                        <p className='my-4 text-lg md:text-xl lg:text-2xl'> 
                            ParkItUp is not intended for individuals under 13.
                            We do not knowingly collect children's data.
                        </p>


                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default Conditions