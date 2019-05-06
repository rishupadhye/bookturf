<template>
    <div>
        <v-card flat> 
            <v-select 
            v-model="duration" 
            flat 
            :items="items" 
            @change="setSlot(duration)" 
            label="Select Hours" 
            item-text="Hours" 
            required></v-select>
            <ul style="list-style-type: disc;">
                <ul v-for=" (a,i) in sel_slot" :key="i" style="float: left; width: 25%;"> 
                    <input type="radio"  name="a" :value="i" @change="setselected(i)"> 
                    <label> {{ a }} - {{ sel_slot[i+1] }}</label> 
                </ul>
                <h5> You have selected:{{sel_slot[m]}}-{{sel_slot[m+1]}} </h5>
               
            </ul>
        </v-card>
    </div>
</template>

<script>
export default {
    name:'selectslot',
    data(){
        return{
            items: ['0.5', '1 ', '2 '],
            duration: ' ',
            slot_val: ' ',
            sel_slot: [ ],
            date:' ',
            m: ' '
        }
    },
    methods: {
        setSlot (duration) {
            this.slot_val=this.duration;
            console.log(this.slot_val)
            this.hoursRange()
        },
        hoursRange() {
            this.date= new Date();
            if(this.slot_val == 0.5)
            {
                while (this.date.getMinutes() % 30 !== 0) 
                {
                    this.date.setMinutes ( this.date.getMinutes() + 1 );
                }
                for (var i = 0; i < 24 ; i++) 
                {
                    this.sel_slot.push(this.date.getHours() + ':' + this.date.getMinutes());
                    this.date.setMinutes ( this.date.getMinutes() + 30);
                }
                console.log(this.sel_slot)
            }
            else if(this.slot_val == 1)
            {
                while (this.date.getMinutes() % 60 !== 0) 
                {
                    this.date.setMinutes ( this.date.getMinutes() + 1 );
                }
                for (var i = 0; i < 24 ; i++) 
                {
                    this.sel_slot.push(this.date.getHours() + ':' + this.date.getMinutes());
                    this.date.setMinutes ( this.date.getMinutes() + 60);
                }
                console.log(this.sel_slot)
            }
            else if(this.slot_val == 2)
            {
                while (this.date.getMinutes() % 120 !== 0) 
                {
                    this.date.setMinutes ( this.date.getMinutes() + 1 );
                }
                for (var i = 0; i < 24 ; i++) 
                {
                    this.sel_slot.push(this.date.getHours() + ':' + this.date.getMinutes());
                    this.date.setMinutes ( this.date.getMinutes() + 120);
                }
                console.log(this.sel_slot)
            }     
        },
        setselected(i){
            this.m= this.i;
            console.log(this.i)
        }
    }
}
</script>

<style scoped>
.ul{
    list-style-type: disc;
    -webkit-columns: 2;
    -moz-columns: 2;
    columns: 2;
    list-style-position: inside;
}
</style>
