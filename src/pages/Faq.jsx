const Faq = () => {
    return (
        <section className="py-10 bg-base-100">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-primary mb-8">
                    Frequently Asked Questions
                </h2>
                <p className="text-center text-lg text-gray-600 mb-10">
                    Have questions about our car rental service? We’re here to help!
                </p>
                
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {/* Question 1 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            How does the car rental process work?
                        </div>
                        <div className="collapse-content">
                            <p>
                                After signing up, you can browse through our available cars, book a vehicle at your preferred time, and pick it up at our designated location. Drive and enjoy, then return the car when you're done!
                            </p>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            What are the rental charges?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Rental charges vary based on the car model, duration of the rental, and any additional services you choose. Detailed pricing is provided during the booking process.
                            </p>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Can I extend or cancel my rental?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, you can extend or cancel your rental. Extensions are subject to car availability and additional charges. Cancellations made within 24 hours may incur a fee.
                            </p>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Is there a mileage limit?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes, there is a mileage limit based on the rental agreement. Exceeding the limit may result in additional charges. Please check the details when booking.
                            </p>
                        </div>
                    </div>

                    {/* Question 5 */}
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            What if I encounter issues with the car?
                        </div>
                        <div className="collapse-content">
                            <p>
                                In case of any issues, please contact our support team immediately. We offer roadside assistance and will provide a replacement vehicle if necessary.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
