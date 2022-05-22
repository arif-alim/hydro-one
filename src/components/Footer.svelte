<script>
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
</footer>
