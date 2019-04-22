<template>
    <div>
    <v-tabs
    centered
      color="rgba(255, 77, 0, 0.87)"
      dark
      v-model="tabs"
      slider-color="yellow"
    >
      <v-tab
        v-for="item in tablinks"
        :key="item.value"
        ripple
      >
       {{ item.text }}

      </v-tab>
      <v-tab-item
        v-for="item in tablinks"
        :key="item.value"
      >
        <v-card flat>
        <!-- ===============Tab ticket list =================-->
          <v-card-text v-if="item.value=='myticket'" class="myticket" >

          </v-card-text>
          <!--================ Tab info ==================-->
          <v-card-text v-if="item.value=='myinfo'" class="my-info">
                <section class="avatar-wrapper">
                  <div class="avatar">
                    <img src="http://en.bcdn.biz/Images/2018/6/6/6483b0a6-667e-4209-9b66-5b4bce6b4e53.jpg" />
                </div>
                  <button @click="changeAvatarHandle" class="edit-btn"><v-icon>edit</v-icon></button>
                </section>
                <!-- Info section -->
              <section >
                  <div class="section-title">
                      <div>Information</div>
                    <div class="title-btn-wapper">
                      <button v-if="enableInputInfo == false" @click="enableInputInfo = true"><v-icon>edit</v-icon></button>
                      <button v-if="enableInputInfo == true" @click="enableInputInfo = false"><v-icon>close</v-icon></button>
                      <button v-if="enableInputInfo == true" @click="handleInfoChange"><v-icon>send</v-icon></button>
                      </div>
                  </div>
                  <div class="section-content">
                      <div class="input-50">
                          <v-text-field
                                color='#ff9d72'
                                label="First name"
                                :disabled="!enableInputInfo"
                                v-model="first_name"
                            ></v-text-field>
                          <v-text-field
                                color='#ff9d72'
                                :disabled="!enableInputInfo"
                                v-model="last_name"
                                label="Last name"
                            ></v-text-field>
                      </div>
                      <div class="input-50">
                            <v-select
                            color='#ff9d72'
                            v-model="gender"
                            :disabled="!enableInputInfo"
                            :items="gender_arr"
                            label="Gender"
                            ></v-select>
                          <v-text-field
                                v-model="dob"                                
                                color='#ff9d72'
                                label="D.O.B"
                                type="date"
                                :disabled="!enableInputInfo"
                            ></v-text-field>
                      </div>
                          <v-textarea
                                color='#ff9d72'
                                v-model="bio"
                                label="Bio"
                                :disabled="!enableInputInfo"
                            ></v-textarea>

                        <!-- Change pass dialog -->
                            <v-dialog
                                v-model="dialog"
                                width="350"
                                >
                                <template v-slot:activator="{ on }">
                                    <v-btn color="#FF4D00"
                                            light
                                            v-on="on"
                                    >Change password</v-btn>
                                </template>

                                <v-card>
                                    <v-card-title
                                    class="headline grey lighten-4"
                                    primary-title
                                    >
                                    Change password
                                    </v-card-title>

                                    <v-card-text>
                                                <v-text-field color='#ff9d72' label="Old password" type="password" required v-model="old_pass" ></v-text-field>
                                                <v-text-field color='#ff9d72' label="New password" type="password" required v-model="new_pass"></v-text-field>
                                                <v-text-field color='#ff9d72' label="Confirm new password" type="password" required v-model="confirm_pass"></v-text-field>
                                    </v-card-text>
                                    <v-card-text>
                                        <div class="dialog-message">Error</div>
                                    </v-card-text>
                                    
                                    <v-divider></v-divider>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="primary"
                                        flat
                                        @click="closeDialogHandle"
                                    >
                                               Close
                                            </v-btn>
                                    <v-btn
                                        color="#FF4D00"
                                        dark
                                        @click="changePassHandle"
                                    >
                                              Change
                                            </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                            <!-- End dialog -->
                  </div>
              </section>
                    <!-- Contact section -->
              <section >
                  <div class="section-title">
                      <div>Contact</div>
                      <div class="title-btn-wapper">
                      <button v-if="enableInputContact == false" @click="enableInputContact = true"><v-icon>edit</v-icon></button>
                      <button v-if="enableInputContact == true" @click="enableInputContact = false"><v-icon>close</v-icon></button>
                      <button v-if="enableInputContact == true" @click="handleContactChange"><v-icon>send</v-icon></button>
                      </div>
                  </div>
                  <div class="section-content">
                      <div class="input-28">
                          <v-text-field
                                color='#ff9d72'
                                :disabled="!enableInputContact"
                                v-model="post_code"
                                label="Post code"
                            ></v-text-field>
                          <v-text-field
                                color='#ff9d72'
                                :disabled="!enableInputContact"
                                v-model="phone_number"
                                label="Phone number"
                            ></v-text-field>
                            </div>
                          <v-text-field
                                color='#ff9d72'
                                label="Address"
                                :disabled="!enableInputContact"
                                v-model="address"
                            ></v-text-field>
                          <v-text-field
                                color='#ff9d72'
                                :disabled="!enableInputContact"
                                v-model="company"
                                label="Company"
                            ></v-text-field>
                  </div>
              </section>
              <!-- Ví -->
              <section >
                  <div class="section-title">
                      <div>My wallet</div>
                  </div>
                  <div class="section-content">
                      <v-text-field
                                color='#ff9d72'
                                disabled
                                v-model="wallet"
                                label="Account balance"
                            ></v-text-field>

                  </div>
              </section>

          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    </div>
</template>

<script>
export default {
    data (){
        return{
        tablinks:[{text:'Vé của tôi', value:'myticket'}, {text:'Thông tin của tôi', value:'myinfo'} ],
        dialog:false,
        tabs:'true',
        //Information
        enableInputInfo:false,
        first_name:'',
        last_name:'',
        gender:'',
        dob:'',
        bio:'',
        gender_arr:[{text:'Male', value:1}, {text:'Female', value:0}],
        //COntact
        phone_number:'',
        address:'',
        post_code:'',
        company:'',
        enableInputContact:false,
        //Wallet
        wallet:0,
        //Change pass dialog
        old_pass:'',
        new_pass:'',
        confirm_pass:'',
        }
    },

    methods:{
        changeAvatarHandle(){
            console.log('change avatar handle');
        },
        handleInfoChange(){
            console.log('info sent')
        },
        handleContactChange(){
            console.log('contact sent')
        },
        clearInput(where){
            if(where=='change_pass'){
                this.old_pass='';
                this.new_pass='';
                this.confirm_pass='';
            }
        },
        closeDialogHandle(){
            this.clearInput('change_pass');
            this.dialog=false;
        },
        changePassHandle(){
            let old_pass = this.old_pass;
            let new_pass = this.new_pass;
            let confirm_pass = this.confirm_pass;
            console.log('Change pass', old_pass, new_pass, confirm_pass);
            this.clearInput('change_pass');
            this.dialog=false;
        },
    }
}
</script>
<style >
.color-white{
    color: white;
}
.v-tabs {
  min-height: calc(100vh - 64px - 102px);
}
.avatar-wrapper{
    width: 150px;
    margin: 35px auto;
    height: 150px;
    border:  1px solid #ebebeb;
    border-radius: 50%;
    overflow: hidden;
    background-color: rgba(249, 232, 225, 0.87);
    position: relative;
}
.edit-btn{
    transition: 0.2s all ease-in-out;

    position: absolute;
    bottom: -60px;
    right: 0;
    width: 100%;
    height: 50px;
    z-index: inherit;
    background-color: #ffffffc7;
}
.edit-btn:hover i,
.my-info .section-title button:hover i{
    color: #FF4D00;
}
.avatar-wrapper:hover .edit-btn{
    bottom: -3px;
}
.avatar{
    width: 100%;
    height: 100%;
}
.avatar img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}
.my-info{
    max-width: 640px;
    margin: auto;
}
.my-info>section:not(.avatar-wrapper){
    padding: 15px 0;
}
.my-info>section{
    margin-bottom: 15px;
}
.my-info .section-title{
    text-transform: uppercase;
    padding: 5px;
    display: flex;
    font-size: 16px;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    letter-spacing: 0.5px;
    color:  #ff9d72;
    border-bottom: 2px solid #ff9d72;
}
.section-content .v-input{
    max-width: 600px;
    margin: 5px 15px;
}
.section-content .v-btn{
    color: white;
}
.section-content>div:first-child{
    margin-top: 20px;
}
.section-content .v-input label{
    font-size: 14px;
}
.input-50, .input-28{
    display: flex;
    justify-content: space-between;
}
.input-50 .v-input{
    width: 50%;
}
.input-28 .v-input:first-child{
    width: 15%;
    min-width: 60px;
}
.input-28 .v-input:not(:first-child){
    width: 85%;
    min-width: 60px;
}
.title-btn-wapper > button:not(:last-child){
    margin-right: 20px;
}

</style>


