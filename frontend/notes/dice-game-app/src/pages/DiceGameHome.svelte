<script>
    import { goto } from '@roxi/routify';

    function startGame() {
        goto('/play');
    }
</script>

<button on:click={startGame}>게임 시작</button>
