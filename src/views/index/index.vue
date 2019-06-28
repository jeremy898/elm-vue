<template>
    <div>
        <top></top>
        <div style="height:1000px;">
            <div class=""></div>
        </div>
        <foot></foot>
    </div>
</template>

<script>
import top from '../../components/Header'
import foot from '../../components/Footer'
export default {
    data () {
        return {
            msg: 1
        }
    },
    components: {
        foot,
        top
    }
}
</script>
