<header class="bg-white max-w-2xl mx-auto container">
    <div class=" lg:divide-y lg:divide-gray-200">
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
                class="hidden lg:py-2 lg:flex lg:space-x-8 items-center mt-1"
                aria-label="Top Nav"
            >
                <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
                <a
                    href="#"
                    class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
                >
                    About Us
                </a>
                <a
                    href="#"
                    class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
                >
                    Sustainability
                </a>
                <a
                    href="#"
                    class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
                >
                    Newsroom
                </a>

                <button
                    type="button"
                    class=" inline-flex justify-center items-center space-x-2 rounded border font-medium focus:outline-none px-4 py-1 text-sm border-teal bg-teal text-white hover:text-white hover:bg-teal hover:border-teal focus:ring focus:ring-teal focus:ring-opacity-50 active:bg-teal active:border-teal"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                        />
                        <path
                            d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                        />
                    </svg>
                    <span>Request a service</span>
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
                    class="flex-shrink-0 bg-white rounded-full p-1 text-gray-500 hover:text-teal focus:outline-none  mt-1"
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
                                class="h-7 w-7 text-gray-500 hover:text-white hover:bg-teal rounded-full"
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
            class="hidden lg:py-4 lg:flex lg:justify-between items-center"
            aria-label="Global"
        >
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Residential Services
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Business Services
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Rates & Billing
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Saving Money & Energy
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Power Outages & Safety
            </a>
            <a
                href="#"
                class="text-gray-900 hover:text-teal inline-flex text-sm font-medium"
            >
                Support Centre & FAQs
            </a>
        </nav>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <nav class="lg:hidden" aria-label="Global" id="mobile-menu">
        <div class="pt-2 pb-3 px-2 space-y-1">
            <!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-900 hover:bg-gray-50 hover:text-gray-900" -->
            <a
                href="#"
                class="bg-gray-100 text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                aria-current="page">Dashboard</a
            >

            <a
                href="#"
                class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                >Team</a
            >

            <a
                href="#"
                class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                >Projects</a
            >

            <a
                href="#"
                class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 block rounded-md py-2 px-3 text-base font-medium"
                >Calendar</a
            >
        </div>
        <div class="border-t border-gray-200 pt-4 pb-3">
            <div class="px-4 flex items-center">
                <div class="flex-shrink-0">
                    <img
                        class="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                    />
                </div>
                <div class="ml-3">
                    <div class="text-base font-medium text-gray-800">
                        Tom Cook
                    </div>
                    <div class="text-sm font-medium text-gray-500">
                        tom@example.com
                    </div>
                </div>
                <button
                    type="button"
                    class="ml-auto flex-shrink-0 bg-white rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span class="sr-only">View notifications</span>
                    <!-- Heroicon name: outline/bell -->
                    <svg
                        class="h-6 w-6"
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
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                    </svg>
                </button>
            </div>
            <div class="mt-3 px-2 space-y-1">
                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >Your Profile</a
                >

                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >Settings</a
                >

                <a
                    href="#"
                    class="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >Sign out</a
                >
            </div>
        </div>
    </nav>
</header>
