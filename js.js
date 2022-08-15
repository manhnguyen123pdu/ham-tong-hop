// // Bài 1: Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, hiển thị hộp thoại thông báo cho người dùng. Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.
// let a= +prompt('nhap gia tri a')
// let b= +prompt('nhap gia tri b')
// function sumIF(a,b){
//     if(a>b){
//         alert('so '+ a + ' lon hon so ' + b)
//     }
//     else{
//         alert('tong hai so la:  ' + (a+b))
//     }
// }
// sumIF(a,b)



// // Bài 2: Tạo một mảng với bảy phần tử dạng chuỗi có giá trị là tên các ngôi sao sau: Polaris, Aldebaran, Deneb, Vega, Altair, Dubhe và Regulus. Tạo một mảng khác với bảy phần tử dạng chuỗi có giá trị là tên các chòm sao tương ứng chứa các ngôi sao: Ursa Minor, Tarurus, Cygnus, Lyra, Aquila, Ursa Major và Leo. Tiếp theo, tạo một hàm nhận vào một tham số dạng chuỗi duy nhất. Trong hàm này, duyệt qua mảng thứ nhất để tìm tên ngôi sao. Nếu tìm thấy, trả lại giá trị tương ứng với chỉ số đó ở mảng thứ hai. Nói cách khác, trả lại tên chòm sao của ngôi sao đó. Trong phần <body> của trang web, dùng hộp thoại prompt để người dùng nhập vào tên của ngôi sao, sau đó gọi hàm với thông tin đầu vào. Đừng quên xử lý trong trường hợp không tìm thấy ngôi sao nào. Cho kết quả hiển thị trên màn hình.

// let star1=['Polaris', 'Aldebaran', 'Deneb', 'Vega', 'Altair', 'Dubhe', 'Regulus']
// let nameOfStar=['Ursa Minor', 'Tarurus', 'Cygnus', 'Lyra', 'Aquila',  'Ursa Major', 'Leo'];
// let findNameOfStar=prompt('xin moi nhap chom sao');
// index=-1
// for(i=0;i<star1.length;i++){
//     if(findNameOfStar==star1[i]){
//         index=i;
//         break;
//     }
// }
// if(index==-1){
//     alert('khong co ten chom sao nay ')
// }
// else{
//     alert('ten cua chom sao cua ngoi sao nay la: ' + nameOfStar[index])
// }



// Bài 3: Viết zzhàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let number=+prompt('xin mời nhập số');
// function square(number){
//     alert('bình phương số '+ number + ' là: ' +(number*number))
// }
// square(number)

// Bài 4: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được
//  function  circleArea(r){
//     document.write('dien tich hinh tron la: '+ 3.14*r)
//     document.write('<br>')
//     document.write('chu vi hinh tron la: ' + 2*3.14*r)
//  }
//  circleArea(2);


// // Bài 5: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.
// let number= prompt('mời nhập số')
// function factorial( number){
//     let value=1;
//     for( i=1;i<=number; i++){
//         value=value*i;
//     }
//     alert(value);
// }
// factorial(number);

// // Bài 6: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.
// let number =+prompt('xin mơi nhập')
// function checkNumber(number){
//     if(number/2){
//         return true;
//     }
//     else{
//         return false
//     }
// }
// alert(checkNumber(number));

// Bài 7: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.
// let a= +prompt('nhap gia tri 1')
// let b= +prompt('nhap gia tri 2')
// let c= +prompt('nhap gia tri 3')
// function maxNumber(a,b,c){
//     if(a>b&&a>c){
//         return a;
//     }
//     else if(b>a&&b>c){
//         return b;
//     }
//     else{
//         return c;
//     }
// }
// alert( ' the max number is: '+ maxNumber(a,b,c))


// // Bài 8: Viết hàm nhận vào một số, kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.
// let number= prompt('nhap so ')
// function checkNumber( number){
//     if(number%1==0 && number>0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }
// alert( checkNumber(number));

// Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.
// let arrStr= prompt('xin moi nhap mang')
// function arrRevert(arrStr){
//     arr=arrStr.split(',')
//     let arrRevert=[]
//     for(i=arr.length-1;i>=0;i--){
//         arrRevert.push(arr[i])
//     }
//     return arrRevert
// }

// console.log(arrRevert(arrStr))

// Bài 10: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không. Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1. 

// let arrStr=prompt('nhap chuoi ki tu');
// let find= prompt('nhap ki tu can tim');
//  function check(arrStr,find){
//     let arr=arrStr.split("");
//     let index=0
//     for(i=0;i<arr.length;i++){
//         if(find==arr[i]){
//             index++;
//         }
//     }
//     if(index==0){
//         return 'khong co phan tu nao tim duoc'
//     }
//     else{
//         return ` co ${index} phan tu ${find} trong '${arrStr}'`
//     }
//  }
 

// alert( check(arrStr,find))