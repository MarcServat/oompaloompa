<template>
  <div>
    <ad-header></ad-header>
    <div class="card">
        <img :src="oompaDetails.image" alt="oompaDetails">
        <div class="info">
            <p class="name">{{ oompaDetails.first_name }} {{ oompaDetails.last_name }}</p>
            <p class="gender">{{ resolveGender(oompaDetails.gender) }}</p>
            <p class="gender profession">{{ oompaDetails.profession }}</p>
            <p class="description">{{ oompaDetails.description }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import ResolveGender from '../Mixins/ResolveGender'
import AdHeader from '../AdHeader/AdHeader.vue'
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Details',
  components: {
    AdHeader
  },
  mixins: [ResolveGender],
  props: {
    id: {
      type: String,
      required: true
    },
    oompaLoompa: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      oompaDetails: state => state.responseDetails.oompaDetails
    })
  },
  methods: {
    ...mapActions([
      'getOompaDetails'
    ]),
    ...mapMutations([
      'cleanState'
    ])
  },
  mounted () {
    this.getOompaDetails(this.id)
    this.cleanState()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="./Details.css">
</style>
