### Installation steps

- Open the project and fire the below command to install the project

```
    npm install
```

### Start the project

- After installation, run the below command to see the output

```
    npm start
```

## Built With

- [React](https://legacy.reactjs.org/docs/getting-started.html/) - The web framework used
- [npm](https://docs.npmjs.com//) - Dependency Management
- [Tailwind](https://tailwindcss.com/) - CSS Framework
- [FontAwesome](https://fontawesome.com/docs/web/use-with/react/) - Fontawesome for icons
- [react-datepicker](https://www.npmjs.com/package/react-datepicker) - datepicker library
- [Flowbite-datepicker](https://flowbite.com/docs/plugins/datepicker/) - Flowbite library
- [Netlify](https://www.netlify.com/) - For hosting the website

## Sources Used

We have taken inspiration from some of the market leaders in the current industry, like [Campr](https://campr.no/), [AirBnb](https://www.airbnb.ca/), [MakeMyTrip](https://www.makemytrip.com/) for website design and features.

### Home.js

Referenced code: [Windstatic](https://windstatic.com/registration)

```
<form>
                      <input autocomplete="false" name="hidden" style="display: none">
                      <input name="_redirect" type="hidden" value="https://jamstacker.studio/thankyou">
                      <div class="mt-4 space-y-6">
                        <div class="col-span-full">
                          <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                            Password
                          </label>
                          <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="******" autocomplete="off" type="password">
                        </div>
                        <div class="col-span-full">
                          <label class="block mb-3 text-sm font-medium text-gray-600" name="password">
                            Confirm passord
                          </label>
                          <input class="block w-full px-6 py-3 text-black bg-white border border-gray-200 rounded-full appearance-none placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" placeholder="******" autocomplete="off" type="password">
                        </div>


```

#### Updated Code

```
                            <div className="w-full md:w-auto">
                                <label
                                    htmlFor="location"
                                    className="text-md block text-left font-semibold text-gray-700"
                                >
                                    Location
                                </label>
                                <input
                                    class="mx-4 ml-10 block h-10 w-52 appearance-none rounded-lg border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm md:w-40"
                                    placeholder="Location"
                                    type="text"
                                />
                            </div>

```

### Faq.js

Source referenced: [Tailgrid](https://tailgrids.com/components/accordions)

```

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
            <AccordionItem
              header="How long we deliver your first blog post?"
              text="It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available ."
            />
          </div>
        </div>
      </div>

```

Updated Code:

```
            <section className="relative z-0 mt-16 overflow-hidden bg-white pb-12 pt-0 sm:mt-8 lg:pb-[90px] lg:pt-[50px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                                    Any Questions? Look Here
                                </h2>
                                <p className="text-body-color text-base">
                                    Lorem ipsum dolor sit amet. Et aliquam quasi nam magni officiis
                                    ut earum necessitatibus est velit blanditiis. Sed corrupti
                                    repellendus nam aliquid libero ut saepe enim.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-full flex-wrap px-2">
                        {faqData.map((faq, index) => (
                            <AccordionItem key={index} header={faq.header} text={faq.text} />
                        ))}
                    </div>
                </div>
                </section>
```

### Contact Us

Source: [Tailgrids](https://tailgrids.com/components/contacts)

```
<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative rounded-lg bg-white p-8 shadow-lg dark:bg-dark-2 sm:p-12">
                <form>
                  <ContactInputBox
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Your Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -right-9 -top-10 z-[-1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#3056D3"
                      />
                    </svg>
                  </span>
```

Updated code:

```
<div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div className="dark:bg-dark-2 relative rounded-lg border-2 bg-white p-8 shadow-lg sm:p-12">
                                <form>
                                    <InputBox type="text" name="name" placeholder="Your Name" />
                                    <InputBox type="text" name="email" placeholder="Your Email" />
                                    <InputBox type="text" name="phone" placeholder="Your Phone" />
                                    <TextBox
                                        row="4"
                                        placeholder="Your Message"
                                        name="details"
                                        defaultValue=""
                                    />
                                    <div>
                                        <button
                                            type="submit"
                                            className="border-primary w-full rounded border bg-sky-600 p-3 text-white transition hover:bg-opacity-90"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                                <div>
                                    <span className="absolute -right-9 -top-10 z-[-1]">
                                        <svg
                                            width={100}
                                            height={100}
                                            viewBox="0 0 100 100"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                                fill="#f97316"
                                            />
                                        </svg>
                                    </span>
```

### Testimonials.js

Referenced code: [Windstatic](https://windstatic.com/testimonials)

```
<section>
                <div class="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">

                  <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black">Sam Samuel</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black"> Tom Thomas</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>
                    <div class="inline-block p-4 mx-auto text-left align-bottom transition-all transform bg-gray-100 sm:align-middle sm:p-8 rounded-2xl">
                      <div class="flex w-full mb-4">
                        <div class="overflow-hidden ">
                          <img alt="" class="inline-block object-cover rounded-full h-9 w-9" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80">
                        </div>
                        <div class="flex-grow pl-3">
                          <h6 class="text-lg font-medium leading-6 text-black"> Ana Lana</h6>
                          <p class="text-base text-gray-500">@Twitter_Handle</p>
                        </div>

                      </div>
                      <div class="w-full mb-4">
                        <p class="text-base text-gray-500">
                          "When building projects, going from an idea to a working version is
                          crucial. Unwrapped's components have been extremely useful for quickly
                          mocking up a landing page"
                        </p>
                      </div>
                      <div class="w-full text">
                        <a href="#_" class="text-xs text-right text-blue-500 hover:text-black">Founder of Great company</a>
                      </div>
                    </div>


                  </div>
                </div>
              </section>
```

Updated code:

```
 <section>
                <div class="relative mx-auto w-full max-w-7xl cursor-pointer items-center px-5 py-12 md:px-12 lg:px-20">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        {testimonials.map((person) => (
                            <div class="mx-auto inline-block transform rounded-2xl bg-gray-100 p-4 text-left align-bottom transition-all sm:p-8 sm:align-middle">
                                <div class="mb-4 flex w-full">
                                    <div class="overflow-hidden">
                                        <img
                                            alt=""
                                            class="inline-block h-9 w-9 rounded-full object-cover"
                                            src={person.imgUrl}
                                        />
                                    </div>
                                    <div class="flex-grow pl-3">
                                        <h6 class="text-lg font-medium leading-6 text-black">
                                            {person.name}
                                        </h6>
                                        <p class="text-base text-gray-500">{person.handle}</p>
                                    </div>
                                </div>
                                <div class="mb-4 w-full">
                                    <p class="text-base text-gray-500">{person.review}</p>
                                </div>
                                <div class="text w-full">
                                    <a
                                        href="#_"
                                        class="text-right text-xs text-blue-500 hover:text-black"
                                    >
                                        {person.hotelName}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
```

## Acknowledgments

References of images used:
[Image 1](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 2](https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 3](https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 4](https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 5](https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 6](https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Image 7](https://images.unsplash.com/photo-1521783988139-89397d761dce?q=80&w=3425&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)
[Icons](https://fontawesome.com/icons/)

- Sincere acknowledgements to [TailwindCss](https://tailwindcss.com/docs/customizing-colors) for color palettes.
