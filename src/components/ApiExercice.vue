<template>
     <div class="apiex">
         <div>
             <h1>List of Applicants</h1>
         </div>
         <br />
         <div v-if="errored">
             <b-alert show variant="danger"> Error on getting datas from the server. </b-alert>
         </div>
         <div v-else >
             <div v-if="loading">
                <b-alert show variant="light">Loading...</b-alert>
             </div>
             <div v-else class="table-responsive">
                 <!-- using boostrap-vue -->
                 <!--
                <b-table stripped hover :items="datas" >
                </b-table>
                -->
                <br />
                <!-- using <table> with boostrap -->
                <table class="table table-hover">
                    <thead class="thead-light">
                        <tr>
                            <th>Index </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Occupation </th>
                            <th>Status</th>
                            <th>Comment</th>
                            <th colspan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data,idx) in datas" :key="idx">
                            <td>{{idx+1}}</td>
                            <td>{{data.firstname}}</td>
                            <td>{{data.lastname}}</td>
                            <td>{{data.age}}</td>
                            <td>{{data.country}}</td>
                            <td>{{data.occupation}}</td>
                            <td>{{data.status}}</td>
                            <td>{{data.comment}}</td>
                            <td><b-link :to="{ name: 'Applicant', params:{id:idx}}">View</b-link></td>
                        </tr>
                    </tbody>
                </table>
             </div>
         </div>
     </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'

export default {
  name: 'ApiExercice',
  data () {
    return { 
      datas: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios.get('http://localhost:4000/api/data')
      .then(res => { this.datas = res.data })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(this.loading = false)
  }
}

</script>

<style scoped>

</style>
