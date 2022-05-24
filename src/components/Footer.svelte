<!-- <script>
    import { path } from 'svelte-pathfinder'
    import Link from '../components/Link.svelte'
    import { appName } from '../lib/constants'
</script>

<footer class="flex flex-col items-center justify-center w-full h-24 font-thin">
    <a
        href="https://github.com/Greenheart/svelte-encrypted-spa"
        class="pb-2"
        target="_blank"
        rel="noopener noreferrer">Created with {appName}</a
    >

    {#if $path.toString() !== '/'}
        <Link href="/">Home</Link>
    {/if}
</footer> -->

<!-- This example requires Tailwind CSS v2.0+ -->
<!-- Footer Section: With Links Info Newsletter -->
<footer id="page-footer" class="bg-white ">
    <div>
        <div
            class="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-2xl mx-auto container pt-16 pb-10"
        >
            <div class="space-y-4 col-span-2">
                <div class="flex-shrink-0 flex items-center">
                    <img
                        class="block h-14 w-auto"
                        src="https://hydroone.s3.ca-central-1.amazonaws.com/hydroone-logo.svg"
                        alt="Hydro One logo"
                    />
                </div>
                <div class="text-tb text-hydroText leading-relaxed">
                    We value our relationship with you and strive to provide you
                    with assistance and answers when you need it.
                </div>
                <div class="text-sm leading-relaxed">
                    <abbr title="Phone">Customer Service:</abbr>1 (888) 664-9376
                    <br />
                    <abbr title="Phone">Monday to Friday:</abbr>7:30am - 8:00pm
                </div>
            </div>
            <div class="space-y-6 mt-5">
                <h4
                    class="text-base uppercase font-semibold tracking-wider text-gray-600"
                >
                    Stay updated
                </h4>
                <nav class="flex flex-col space-y-3">
                    <a
                        href="javascript:void(0)"
                        class="text-tb font-medium text-gray-600 hover:text-hydroTeal"
                    >
                        Sign Up for Outage Alerts
                    </a>
                    <a
                        href="javascript:void(0)"
                        class="text-tb font-medium text-gray-600 hover:text-hydroTeal"
                    >
                        Learn About High Usage Alerts
                    </a>
                    <a
                        href="javascript:void(0)"
                        class="text-tb font-medium text-gray-600 hover:text-hydroTeal"
                    >
                        View Our Outage Map
                    </a>
                </nav>
            </div>
            <div class="space-y-6 mt-5">
                <h4
                    class="text-base uppercase font-semibold tracking-wider text-gray-600"
                >
                    Manage your monthly bill
                </h4>
                <nav class="flex flex-col space-y-3">
                    <a
                        href="javascript:void(0)"
                        class="text-tb font-medium text-gray-600 hover:text-hydroTeal"
                    >
                        Sign Up for Outage Alerts
                    </a>
                    <a
                        href="javascript:void(0)"
                        class="text-tb font-medium text-gray-600 hover:text-hydroTeal"
                    >
                        View Time-of-Use Rates
                    </a>
                </nav>
            </div>
        </div>
        <hr class="" />
        <!-- This example requires Tailwind CSS v2.0+ -->
        <div class="pt-8 pb-7 overflow-hidden">
            <nav
                class="-mx-5 -my-2 flex flex-wrap justify-center"
                aria-label="Footer"
            >
                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Careers
                    </a>
                </div>

                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Investor Relations
                    </a>
                </div>

                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Regulatory Affairs
                    </a>
                </div>

                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Newsroom
                    </a>
                </div>

                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Contact Us
                    </a>
                </div>

                <div class="px-5 py-2">
                    <a
                        href="#"
                        class="text-tiny text-gray-600 hover:text-gray-900"
                    >
                        Employee Hub
                    </a>
                </div>
                <div class="px-5 py-2 flex items-center">
                    <a
                        href="javascript:void(0)"
                        class="text-slate-900 hover:text-rose-600 flex items-center"
                    >
                        <img
                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                            alt=""
                            class="w-5 h-auto block flex-shrink-0"
                        />
                        <span class="ml-3 block text-tiny font-medium">
                            En Francais
                        </span>
                        <span class="sr-only">, change language</span>
                    </a>
                </div>
            </nav>
            <div class="mt-8 flex justify-center items-center space-x-6">
                <a
                    href="https://www.facebook.com/HydroOneOfficial"
                    class="text-gray-600 hover:text-hydroTeal"
                    target="_blank"
                >
                    <span class="sr-only">Facebook</span>
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>

                <a
                    href="https://www.instagram.com/hydrooneofficial/"
                    class="text-gray-600 hover:text-hydroTeal"
                    target="_blank"
                >
                    <span class="sr-only">Instagram</span>
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>

                <a
                    href="https://www.hydroone.com/business-services/farmers"
                    class="text-gray-600 hover:text-hydroTeal"
                    target="_blank"
                >
                    <span class="sr-only">Twitter</span>
                    <svg
                        class="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        />
                    </svg>
                </a>

                <a
                    href="https://www.youtube.com/c/hydroonechannel"
                    class="text-gray-600 hover:text-hydroTeal"
                    target="_blank"
                >
                    <span class="sr-only">Youtube</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 16 16"
                    >
                        <path
                            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                        />
                    </svg>
                </a>

                <a
                    href="https://ca.linkedin.com/company/hydro-one"
                    class="text-gray-600 hover:text-hydroTeal"
                    target="_blank"
                >
                    <span class="sr-only">LinkedIn</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        class="h-6 w-6"
                        viewBox="0 0 448 512"
                        ><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
                            d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                        /></svg
                    >
                </a>
            </div>
            <p class="mt-8 text-center text-sm text-gray-400">
                &copy; 2009-2022 Hydro One Networks Inc. All rights reserved.
            </p>
        </div>
    </div>
</footer>
<!-- END Footer Section: With Links Info Newsletter -->
