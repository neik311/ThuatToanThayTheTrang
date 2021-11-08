const MAXWITH =50;
const MAXHIGHT =9;
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null  
        this.bit = 1              
    }
}
function insertLast(listHead,data){
    let note = new ListNode(data)
    if (listHead.data == null){
        listHead.data = note.data;
        return ;
    }
    let lastNode = listHead;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next
        }
    }
    lastNode.next = note;
}
function deleteList(listHead,index){
    if (index >=size(listHead))
      return listHead
    if (index==0){
        listHead = listHead.next;
        return listHead;
    }
    let i = 0;
    for(let key=listHead;key!=null;key=key.next){
       if (i== index-1){
           key.next = key.next.next;
           return listHead;
       }
       i++;
    }
}
function size(listHead){
    let count = 0; 
    let node = listHead;
    while (node) {
        count++;
        node = node.next
    }
    return count;
}
function check(listHead,data){
    let index =0;
    for(let key=listHead;key!=null;key=key.next){
         if (key.data == data){
             vongLap=0
            return index;
         }
         index++
        }
    index =0 ;
    for(let key=listHead;key!=null;key=key.next){
        if (key.bit == 0){
            vongLap=1;
            return index;
        }
        else 
           key.bit =0;
        index++
    }
    index =0 ;
    for(let key=listHead;key!=null;key=key.next){
        if (key.bit == 0){
            vongLap=2
            return index;
        }
        else 
           key.bit =0;
        index++
    }
    return -1;
}
function checkArr(arr){
    if (arr=='') return false;
    for(let i =0; i< arr.length;i++){
        if (arr[i] <'0'  || arr[i] >'9')
          return false
    }
    return true;
}
function outColor(){
    if(index>0){
            let dem=1;
            for(let listKey =list;listKey!=null;listKey=listKey.next){
               let key = table1[dem].getElementsByTagName('td')
               if(key[index-1].style.backgroundColor =='rgb(75, 243, 243)')
                  key[index-1].style.backgroundColor ='rgba(32, 32, 32, 0.144)'
               dem++;
            }
        }
    if(index>=Hang){
            let dem=1;
            for(let listKey =list;listKey!=null;listKey=listKey.next){
               let key = table1[dem].getElementsByTagName('td')
               if(key[index-1].style.backgroundColor =='rgb(75, 243, 243)')
                  key[index-1].style.backgroundColor ='rgba(32, 32, 32, 0.144)'
               dem++;
            }
            clearInterval(out)
            return
        }
    let dem=1;
    for(let listKey =list;listKey!=null;listKey=listKey.next){
               let key = table1[dem].getElementsByTagName('td')
               key[index].innerHTML = listKey.data.toString() +'('+ listKey.bit.toString() +')'
               key[index].style.backgroundColor ='rgb(75, 243, 243)'
               dem++;
        }
    index++
    if(index <Hang){
      arr[index] = arr[index] - 0
      if (size(list) < Trang){
            insertLast(list,arr[index])
            value = -1;
      }
      else if (size(list) == Trang) {
        value =check(list,arr[index])
        if (value !=-1){
             list = deleteList(list,value)
             insertLast(list,arr[index])
        }
        if(vongLap !=0){
            if(vongLap ==1){
                let i=0 , delayTime2 = (value+1>3) ? (delayTime-50)/(value+1) : 200;
                let out = setInterval(function(){
                    let keyx = table1[i+1].getElementsByTagName('td')
                    keyx[index-1].style.backgroundColor = 'rgb(19, 19, 248)';// blue
                    if(i!=0){
                      let keyx = table1[i].getElementsByTagName('td')
                      keyx[index-1].style.backgroundColor = 'rgba(32, 32, 32, 0.144)';
                    }
                    i++;
                   if(i>=value){
                       clearInterval(out)
                   }
                  },delayTime2)
            }
           else if(vongLap==2){
                let i=0 ,kCheck = true , delayTime2 = (Trang+value+1>3) ? (delayTime-50)/(Trang+value+1) : 200;
                let out = setInterval(function(){
                    let keyx = table1[i+1].getElementsByTagName('td')
                    keyx[index-1].style.backgroundColor = 'rgb(19, 19, 248)';// blue
                    if(i!=0){
                      let keyx = table1[i].getElementsByTagName('td')
                      keyx[index-1].style.backgroundColor = 'rgba(32, 32, 32, 0.144)';
                    }
                    else if(i==0 && kCheck==false){
                        let  keyx = table1[Trang].getElementsByTagName('td')
                        keyx[index-1].style.backgroundColor = 'rgba(32, 32, 32, 0.144)';// blue
                    }
                    i++;
                    if(i>=value && kCheck ==false){
                        clearInterval(out)
                    }
                    else if(i>=Trang && kCheck){
                        i=0;
                        kCheck =false;
                    }
                  },delayTime2)
           }
        }
      }
    }
}
function myFunction(){
    let khung =document.getElementById('input1').value
    let listDs = document.getElementById('input2').value
    listDs =listDs.trim()
    while(listDs.includes('  ')){
        listDs = listDs.replace('  ',' ')
    }
    arr =listDs.split(' ')
    let ktCheck = false;
    if (khung==null ||khung<'0' || khung >'9'){
        let waring = document.querySelector('.style_input1 p')
        waring.style.display = 'block'
        ktCheck =true;
    }
    if (checkArr(arr) == false){
        let waring = document.querySelector('.style_input2 p')
        waring.style.display = 'block'
        ktCheck =true
    }
    if(ktCheck) return;
    Trang =khung-0 ;
    if(Trang>5)
        document.getElementById('main').style.height = (800+(Trang-5)*55) + 'px'
    Hang = arr.length;
    list = new ListNode(arr[0])
    let starTable = document.getElementById('table')
    starTable.style.display ='block'
    starTable.style.width = (Hang*52).toString() + 'px';
    starTable.style.marginTop= (30 + ((Trang<5) ? (100-Trang*20) : 0)).toString() +'px'
    let table =document.getElementById('my_table')
    table.innerHTML =''
    for(let i=0;i<=Trang;i++){
        let sx ='<tr>';
        for(let j=0;j<Hang;j++){
              sx = sx + '<td></td>'
        }
        sx = sx + '</tr>';
        table.innerHTML = table.innerHTML + sx
    }
     table1 =table.getElementsByTagName('tr')
    let key = table1[0].getElementsByTagName('td')
    for (let i=0 ;i<Hang;i++){
        key[i].innerHTML = arr[i];
        key[i].style.backgroundColor ='rgba(156, 156, 156, 0.726)'
    }
    index =0;
    vongLap =0;
    out = setInterval(outColor,delayTime)
    document.getElementById('note').style.display = 'block'
}
function warInput1(){
    let waring = document.querySelector('.style_input1 p')
        waring.style.display = 'none'
}
function warInput2(){
    let waring = document.querySelector('.style_input2 p')
        waring.style.display = 'none'
}
function myBonus(){
    let key =document.getElementById('mybonus')
    key.style.display = 'block'
}
function myclose(){
    let key =document.getElementById('mybonus')
    key.style.display = 'none'
}
const delayTime =800;
var list,table1,Hang,Trang,out,index,arr,vongLap,value,vtCot,vtHang,kt;
