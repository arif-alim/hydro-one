<header class="bg-white max-w-2xl mx-auto container px-15">
    <div class=" lg:divide-y lg:divide-gray-200 ">
        <div class="relative h-16 flex justify-between items-center">
            <div class="relative z-10 flex lg:px-0">
                <div class="flex-shrink-0 flex items-center">
                    <img
                        class="block h-14 w-auto"
                        src="https://hydroone.s3.ca-central-1.amazonaws.com/hydroone-logo.svg"
                        alt="Hydro One logo"
                    />
                </div>
            </div>
            <nav
                class="hidden lg:py-2 lg:flex lg:space-x-10 items-center mt-1"
                aria-label="Top Nav"
            >
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
                <a
                    href="#"
                    class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
                >
                    About Us
                </a>
                <a
                    href="#"
                    class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
                >
                    Sustainability
                </a>
                <a
                    href="#"
                    class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
                >
                    Newsroom
                </a>
                <div class="hidden xl:flex items-center ">
                    <a
                        href="javascript:void(0)"
                        class="text-slate-900 hover:text-rose-600 flex items-center"
                    >
                        <img
                            src="https://tailwindui.com/img/flags/flag-canada.svg"
                            alt=""
                            class="w-5 h-auto block flex-shrink-0"
                        />
                        <span class="ml-3 block text-sz font-medium">
                            En Francais
                        </span>
                        <span class="sr-only">, change language</span>
                    </a>
                </div>

                <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-hydroTeal hover:bg-hydroTealLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydroTeal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="-ml-0.5 mr-2 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Request a service
                </button>
            </nav>
            <div class="relative z-10 flex items-center lg:hidden">
                <!-- Mobile menu button -->
                <button
                    type="button"
                    class="rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open menu</span>
                    <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
                    <svg
                        class="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
                    <svg
                        class="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
            <div
                class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center"
            >
                <button
                    type="button"
                    class="flex-shrink-0 bg-white rounded-full p-1 text-gray-500 hover:text-hydroTeal focus:outline-none  mt-1"
                >
                    <span class="sr-only">Search</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>

                <!-- Profile dropdown -->
                <div class="flex-shrink-0 relative ml-4">
                    <div>
                        <button
                            type="button"
                            class="bg-white rounded-full flex focus:outline-none mt-1 "
                            id="user-menu-button"
                            aria-expanded="false"
                            aria-haspopup="true"
                        >
                            <span class="sr-only">Login / Register</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7 text-gray-500 hover:text-white hover:bg-hydroTeal rounded-full"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <nav
            class="hidden lg:py-4 lg:flex lg:justify-between items-center "
            aria-label="Global"
        >
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Residential Services
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Business Services
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Rates & Billing
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Saving Money & Energy
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Power Outages & Safety
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-hydroTeal inline-flex text-sz font-medium"
            >
                Support Centre & FAQs
            </a>
        </nav>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
        <div class="pt-2  px-2 space-y-4 divide-y divide-gray-200">
            <div>
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
                <a
                    href="#"
                    class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                    aria-current="page">About</a
                >

                <a
                    href="#"
                    class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                    >Sustainability</a
                >

                <a
                    href="#"
                    class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                    >Newsroom</a
                >

                <button
                    type="button"
                    class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-hydroTeal hover:bg-hydroTealLight focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-hydroTeal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="-ml-0.5 mr-2 h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Request a service
                </button>
            </div>
            <div class="space-y-1">
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Residential Services
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Business Services
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Rates & Billing
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Saving Money & Energy
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Power Outages & Safety
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a
                    href="#"
                    class="flex items-center text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 text-base font-medium"
                >
                    Support Centre & FAQs
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-1.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </nav>
</header>
