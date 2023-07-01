<template>
    <div>
  <ul v-for="item in paihang" :key="item.id" class="scroll-item w-[85vw] rounded-xl mr-5 bg-[whitesmoke] dark:bg-gray-700">
                      
                      <li class=" w-[89vw] h-[14.17vw] mb-4 flex items-center" >
                          <div class="font-[700] flex items-center ">
                              <p >{{ item.uiElement.mainTitle?.title }}</p>
                              <icon icon="ep:arrow-right-bold" color="black" width="15" />
                          </div>
                          <p class="ml-10 text-xs">{{ item.mainTitle?.titleDesc }}</p>
                      </li>
                      <li class="w-[85vw] h-[14.17vw] mb-4 flex justify-between relative" v-for="(item2,index) in item.resources" :key="item2.id">
                          <img :src="item2.uiElement.image.imageUrl" alt="" class="w-[14.17vw] h-[14.17vw] rounded-xl">
                          <div class="flex absolute left-[14vw] top-[3vw] justify-start test-xs mr-[20vw] items-center text-left overflow-hidden">
                              <p class="ml-4 mr-5"> 
                                  {{ index+1 }}
                              </p>
                          
                              <div class="font-[100] overflow-hidden w-[30vw]">
                                  <p class="text-xl text-[#000] dark:text-[white]">{{ item2.uiElement.mainTitle.title }}</p>
                                  <p class="text-[13px] text-[#666]">{{item2.resourceExtInfo?.artists[0].name}}</p>

                              </div>
                          </div>
                          <p class="text-xs">{{ item.uiElement.labelText?.text }}</p>
                      </li>
                  </ul>
                </div>
</template>

<script>
 export default{ 
        props:['paihang'],
 
        
    }
</script>