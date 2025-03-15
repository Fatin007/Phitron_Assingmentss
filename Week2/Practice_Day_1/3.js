const a=[6,7,12,19,3,5,17,10,11,9,18,15,4,16,14,8,2,13,20,1];

for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]>a[j]){
            let temp=a[i];
            a[i]=a[j];
            a[j]=temp;
        }
    }
}

console.log(...a);