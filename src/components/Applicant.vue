<template>
    <div>
         <div>
            <b-button variant="primary" v-on:click="goToBack()">Return</b-button>
        </div>
        <div v-if="errorid">
            <b-alert show variant="danger">Error on getting the data from the server</b-alert>
        </div>
        <div v-else>
            <div v-if="data == null">
                <b-alert show variant="danger">Applicant {{id}} doesn't exists.</b-alert>
            </div>
            <div v-else>
                <h3>Applicant ID : {{id}}  </h3>
                <br />
                <p>First name : {{data.firstname}}</p>
                <p>Last name : {{data.lastname}}</p>
                <p>Age : {{data.age}}</p>
                <p>Country : {{data.country}}</p>
                <p>Occupation : {{data.occupation}}</p>
                <p>Status : {{data.status}}</p>
                <p>Comments : {{data.comment}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import router from '../router'

export default {
  name: 'Applicant',
  data () {
    return {
      data: null,
      errorid: false,
      id: this.$route.params.id
    }
  },
  mounted () {
    axios.get('http://localhost:4000/api/data/' + this.$route.params.id)
      .then(res => { this.data = res.data })
      .catch(error => {
        console.log(error)
        this.errorid = true
      })
  },
  methods: {
    goToBack () {
      router.go(-1)
    }
  }
}
</script>

<style scoped>
    h3, p{
        text-align: left;
        margin-left: 10px;
    }
</style>
