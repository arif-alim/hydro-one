<script context="module" lang="ts">
    import { appName } from '../lib/constants'
    import Footer from '../components/Footer.svelte'
    import Header from '../components/Header.svelte'
</script>

<script lang="ts">
    export let title = ''
</script>

<svelte:head>
    <title>{`${title ? title + ' | ' : ''}${appName}`}</title>
</svelte:head>

<main>
    <Header />
    <slot />
    <Footer />
</main>
