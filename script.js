function displayRadioValue() {
    let total = "";
    
    
    //A
    let a03 = document.getElementsByName('A03'); let a04 = document.getElementsByName('A04'); let a05 = document.getElementsByName('A05'); let aa03=0, aa04=0, aa05=0;
        
        for(i = 0; i < a03.length; i++) {
            if(a03[i].checked)
            aa03 = parseInt(a03[i].value);
            } //判斷哪個選項被選，得出他的價錢
            for(i = 0; i < a03.length; i++) {
                if(a03[i].checked)
                total = total + a03[i].className;        
            } //將屬性標籤加到total中

        for(j = 0; j < a04.length; j++) {
            if(a04[j].checked)
            aa04 = parseInt(a04[j].value);
            }
            for(j = 0; j < a04.length; j++) {
            if(a04[j].checked)
            total = total + a04[j].className;
            }

        for(j = 0; j < a05.length; j++) {
            if(a05[j].checked)
            aa05 = parseInt(a05[j].value);
            }
            for(j = 0; j < a05.length; j++) {
            if(a05[j].checked)
            total = total + a05[j].className;
            }
    
    //B
    let b07 = document.getElementsByName('B07');
    let b08 = document.getElementsByName('B08');
    let b09 = document.getElementsByName('B09');
    let b10 = document.getElementsByName('B10');
    let b11 = document.getElementsByName('B11');
    let b12 = document.getElementsByName('B12');
    let b13 = document.getElementsByName('B13');
    let b14 = document.getElementsByName('B14');
    let b15 = document.getElementsByName('B15');
    let b16 = document.getElementsByName('B16');
    let b17 = document.getElementsByName('B17');
    let bb07=0, bb08=0, bb09=0, bb10=0, bb11=0, bb12=0, bb13=0, bb14=0, bb15=0, bb16=0, bb17=0;
        
    for(i = 0; i < b07.length; i++) {
        if(b07[i].checked)
        bb07 = parseInt(b07[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b07.length; i++) {
            if(b07[i].checked)
            total = total + b07[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b08.length; i++) {
        if(b08[i].checked)
        bb08 = parseInt(b08[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b08.length; i++) {
            if(b08[i].checked)
            total = total + b08[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b09.length; i++) {
            if(b09[i].checked)
            bb09 = parseInt(b09[i].value);
            } //判斷哪個選項被選，得出他的價錢
            for(i = 0; i < b09.length; i++) {
                if(b09[i].checked)
                total = total + b09[i].className;        
            } //將屬性標籤加到total中
    for(i = 0; i < b10.length; i++) {
        if(b10[i].checked)
        bb10 = parseInt(b10[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b10.length; i++) {
            if(b10[i].checked)
            total = total + b10[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b11.length; i++) {
        if(b11[i].checked)
        bb11 = parseInt(b11[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b11.length; i++) {
            if(b11[i].checked)
            total = total + b11[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b12.length; i++) {
        if(b12[i].checked)
        bb12 = parseInt(b12[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b12.length; i++) {
            if(b12[i].checked)
            total = total + b12[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b13.length; i++) {
        if(b13[i].checked)
        bb13 = parseInt(b13[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b13.length; i++) {
            if(b13[i].checked)
            total = total + b13[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b14.length; i++) {
        if(b14[i].checked)
        bb14 = parseInt(b14[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b14.length; i++) {
            if(b14[i].checked)
            total = total + b14[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b15.length; i++) {
        if(b15[i].checked)
        bb15 = parseInt(b15[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b15.length; i++) {
            if(b15[i].checked)
            total = total + b15[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b16.length; i++) {
        if(b16[i].checked)
        bb16 = parseInt(b16[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b16.length; i++) {
            if(b16[i].checked)
            total = total + b16[i].className;        
        } //將屬性標籤加到total中
    for(i = 0; i < b17.length; i++) {
        if(b17[i].checked)
        bb17 = parseInt(b17[i].value);
        } //判斷哪個選項被選，得出他的價錢
        for(i = 0; i < b17.length; i++) {
            if(b17[i].checked)
            total = total + b17[i].className;        
        } 
    //C
    let c19 = document.getElementsByName('C19');
    let c20 = document.getElementsByName('C20');
    let c21 = document.getElementsByName('C21');
    let c22 = document.getElementsByName('C22');
    let c23 = document.getElementsByName('C23');
    let c24 = document.getElementsByName('C24');
    let cc19=0, cc20=0, cc21=0, cc22=0, cc23=0, cc24=0;
        
    for(i = 0; i < c19.length; i++) {
        if(c19[i].checked)
        cc19 = parseInt(c19[i].value);
        } 
        for(i = 0; i < c19.length; i++) {
            if(c19[i].checked)
            total = total + c19[i].className;        
        }  
    for(i = 0; i < c20.length; i++) {
        if(c20[i].checked)
        cc20 = parseInt(c20[i].value);
        } 
        for(i = 0; i < c20.length; i++) {
            if(c20[i].checked)
            total = total + c20[i].className;        
        }  
    for(i = 0; i < c21.length; i++) {
        if(c21[i].checked)
        cc21 = parseInt(c21[i].value);
        } 
        for(i = 0; i < c21.length; i++) {
            if(c21[i].checked)
            total = total + c21[i].className;        
        } 
    for(i = 0; i < c22.length; i++) {
        if(c22[i].checked)
        cc22 = parseInt(c22[i].value);
        } 
        for(i = 0; i < c22.length; i++) {
            if(c22[i].checked)
            total = total + c22[i].className;        
        } 
    for(i = 0; i < c23.length; i++) {
        if(c23[i].checked)
        cc23 = parseInt(c23[i].value);
        } 
        for(i = 0; i < c23.length; i++) {
            if(c23[i].checked)
            total = total + c23[i].className;        
        } 
    for(i = 0; i < c24.length; i++) {
        if(c24[i].checked)
        cc24 = parseInt(c24[i].value);
        } 
        for(i = 0; i < c24.length; i++) {
            if(c24[i].checked)
            total = total + c24[i].className;        
        }
    //D
    let d26 = document.getElementsByName('D26');
    let d27 = document.getElementsByName('D27');
    let d28 = document.getElementsByName('D28');
    let d30 = document.getElementsByName('D30');
    let d31 = document.getElementsByName('D31');
    let d32 = document.getElementsByName('D32');
    let d33 = document.getElementsByName('D33');
    let d34 = document.getElementsByName('D34');
    let d35 = document.getElementsByName('D35');
    let d36 = document.getElementsByName('D36');
    let d37 = document.getElementsByName('D37');
    let dd26=0, dd27=0, dd28=0, dd30=0, dd31=0, dd32=0, dd33=0, dd34=0, dd35=0, dd36=0, dd37=0;

    for(i = 0; i < d26.length; i++) {
        if(d26[i].checked)
        dd26 = parseInt(d26[i].value);
        } 
        for(i = 0; i < d26.length; i++) {
            if(d26[i].checked)
            total = total + d26[i].className;        
        }  

    for(i = 0; i < d27.length; i++) {
        if(d27[i].checked)
        dd27 = parseInt(d27[i].value);
        } 
        for(i = 0; i < d27.length; i++) {
            if(d27[i].checked)
            total = total + d27[i].className;        
        }  

    for(i = 0; i < d28.length; i++) {
        if(d28[i].checked)
        dd28 = parseInt(d28[i].value);
        } 
        for(i = 0; i < d28.length; i++) {
            if(d28[i].checked)
            total = total + d28[i].className;        
        }  

    for(i = 0; i < d30.length; i++) {
        if(d30[i].checked)
        dd30 = parseInt(d30[i].value);
        } 
        for(i = 0; i < d30.length; i++) {
            if(d30[i].checked)
            total = total + d30[i].className;        
        }  

    for(i = 0; i < d31.length; i++) {
        if(d31[i].checked)
        dd31 = parseInt(d31[i].value);
        } 
        for(i = 0; i < d31.length; i++) {
            if(d31[i].checked)
            total = total + d31[i].className;        
        }  

    for(i = 0; i < d32.length; i++) {
        if(d32[i].checked)
        dd32 = parseInt(d32[i].value);
        } 
        for(i = 0; i < d32.length; i++) {
            if(d32[i].checked)
            total = total + d32[i].className;        
        }  
    
    for(i = 0; i < d33.length; i++) {
        if(d33[i].checked)
        dd33 = parseInt(d33[i].value);
        } 
        for(i = 0; i < d33.length; i++) {
            if(d33[i].checked)
            total = total + d33[i].className;        
        }  

    for(i = 0; i < d34.length; i++) {
        if(d34[i].checked)
        dd34 = parseInt(d34[i].value);
        } 
        for(i = 0; i < d34.length; i++) {
            if(d34[i].checked)
            total = total + d34[i].className;        
        }  
    
    for(i = 0; i < d35.length; i++) {
        if(d35[i].checked)
        dd35 = parseInt(d35[i].value);
        } 
        for(i = 0; i < d35.length; i++) {
            if(d35[i].checked)
            total = total + d35[i].className;        
        }  

    for(i = 0; i < d36.length; i++) {
        if(d36[i].checked)
        dd36 = parseInt(d36[i].value);
        } 
        for(i = 0; i < d36.length; i++) {
            if(d36[i].checked)
            total = total + d36[i].className;        
        }  

    for(i = 0; i < d37.length; i++) {
        if(d37[i].checked)
        dd37 = parseInt(d37[i].value);
        } 
        for(i = 0; i < d37.length; i++) {
            if(d37[i].checked)
            total = total + d37[i].className;        
        }  
    //E
    let e39 = document.getElementsByName('E39');
    let e40 = document.getElementsByName('E40');
    let e41 = document.getElementsByName('E41');
    let e42 = document.getElementsByName('E42');
    let e43 = document.getElementsByName('E43');
    let e44 = document.getElementsByName('E44');
    let e45 = document.getElementsByName('E45');
    let e46 = document.getElementsByName('E46');
    let ee39=0, ee40=0, ee41=0, ee42=0, ee43=0, ee44=0, ee45=0, ee46=0;

    for(i = 0; i < e39.length; i++) {
        if(e39[i].checked)
        ee39 = parseInt(e39[i].value);
        } 
        for(i = 0; i < e39.length; i++) {
            if(e39[i].checked)
            total = total + e39[i].className;        
        }  
    //----------// 
    for(i = 0; i < e40.length; i++) {
        if(e40[i].checked)
        ee40 = parseInt(e40[i].value);
        } 
        for(i = 0; i < e40.length; i++) {
            if(e40[i].checked)
            total = total + e40[i].className;        
        }  
    //----------//    
    for(i = 0; i < e41.length; i++) {
        if(e41[i].checked)
        ee41 = parseInt(e41[i].value);
        } 
        for(i = 0; i < e41.length; i++) {
            if(e41[i].checked)
            total = total + e41[i].className;        
        }  
    //----------// 
    for(i = 0; i < e42.length; i++) {
        if(e42[i].checked)
        ee42 = parseInt(e42[i].value);
        } 
        for(i = 0; i < e42.length; i++) {
            if(e42[i].checked)
            total = total + e42[i].className;        
        }  
    //----------// 
    for(i = 0; i < e43.length; i++) {
        if(e43[i].checked)
        ee43 = parseInt(e43[i].value);
        } 
        for(i = 0; i < e43.length; i++) {
            if(e43[i].checked)
            total = total + e43[i].className;        
        }  
    //----------// 
    for(i = 0; i < e44.length; i++) {
        if(e44[i].checked)
        ee44 = parseInt(e44[i].value);
        } 
        for(i = 0; i < e44.length; i++) {
            if(e44[i].checked)
            total = total + e44[i].className;        
        }  
    //----------// 
    for(i = 0; i < e45.length; i++) {
        if(e45[i].checked)
        ee45 = parseInt(e45[i].value);
        } 
        for(i = 0; i < e45.length; i++) {
            if(e45[i].checked)
            total = total + e45[i].className;        
        }  
    //----------// 
    for(i = 0; i < e46.length; i++) {
        if(e46[i].checked)
        ee46 = parseInt(e46[i].value);
        } 
        for(i = 0; i < e46.length; i++) {
            if(e46[i].checked)
            total = total + e46[i].className;        
        }  
    //----------// 
        
    //F

    let f48 = document.getElementsByName('F48');
    let f49 = document.getElementsByName('F49');
    let f50 = document.getElementsByName('F50');
    let f51 = document.getElementsByName('F51');
    let f52 = document.getElementsByName('F52');
    let f53 = document.getElementsByName('F53');
    let f54 = document.getElementsByName('F54');
    let f55 = document.getElementsByName('F55');
    let f56 = document.getElementsByName('F56');
    let ff48 = 0, ff49 = 0, ff50 = 0, ff51 = 0, ff52 = 0, ff53 = 0, ff54 = 0, ff55 = 0, ff56 = 0;

    for(i = 0; i < f48.length; i++) {
        if(f48[i].checked)
        ff48 = parseInt(f48[i].value);
        } 
        for(i = 0; i < f48.length; i++) {
            if(f48[i].checked)
            total = total + f48[i].className;        
        }  
    //----------// 
    for(i = 0; i < f49.length; i++) {
        if(f49[i].checked)
        ff49 = parseInt(f49[i].value);
        } 
        for(i = 0; i < f49.length; i++) {
            if(f49[i].checked)
            total = total + f49[i].className;        
        }  
    //----------// 
    for(i = 0; i < f50.length; i++) {
        if(f50[i].checked)
        ff50 = parseInt(f50[i].value);
        } 
        for(i = 0; i < f50.length; i++) {
            if(f50[i].checked)
            total = total + f50[i].className;        
        }  
    //----------// 
    for(i = 0; i < f51.length; i++) {
        if(f51[i].checked)
        ff51 = parseInt(f51[i].value);
        } 
        for(i = 0; i < f51.length; i++) {
            if(f51[i].checked)
            total = total + f51[i].className;        
        }  
    //----------// 
    for(i = 0; i < f52.length; i++) {
        if(f52[i].checked)
        ff52 = parseInt(f52[i].value);
        } 
        for(i = 0; i < f52.length; i++) {
            if(f52[i].checked)
            total = total + f52[i].className;        
        }  
    //----------// 
    for(i = 0; i < f53.length; i++) {
        if(f53[i].checked)
        ff53 = parseInt(f53[i].value);
        } 
        for(i = 0; i < f53.length; i++) {
            if(f53[i].checked)
            total = total + f53[i].className;        
        }  
    //----------// 
    for(i = 0; i < f54.length; i++) {
        if(f54[i].checked)
        ff54 = parseInt(f54[i].value);
        } 
        for(i = 0; i < f54.length; i++) {
            if(f54[i].checked)
            total = total + f54[i].className;        
        }  
    //----------// 
    for(i = 0; i < f55.length; i++) {
        if(f55[i].checked)
        ff55 = parseInt(f55[i].value);
        } 
        for(i = 0; i < f55.length; i++) {
            if(f55[i].checked)
            total = total + f55[i].className;        
        }  
    //----------// 
    for(i = 0; i < f56.length; i++) {
        if(f56[i].checked)
        ff56 = parseInt(f56[i].value);
        } 
        for(i = 0; i < f56.length; i++) {
            if(f56[i].checked)
            total = total + f56[i].className;        
        }  
    //----------// 
    
    //G

    let g58 = document.getElementsByName('G58');
    let g59 = document.getElementsByName('G59');
    let g60 = document.getElementsByName('G60');
    let g61 = document.getElementsByName('G61');
    let g62 = document.getElementsByName('G62');
    let g63 = document.getElementsByName('G63');
    let g64 = document.getElementsByName('G64');
    let g65 = document.getElementsByName('G65');
    let g66 = document.getElementsByName('G66');

    let gg58=0, gg59=0, gg60=0, gg61=0, gg62=0, gg63=0, gg64=0, gg65=0, gg66=0;
    for(i = 0; i < g58.length; i++) {
        if(g58[i].checked)
        gg58 = parseInt(g58[i].value);
        } 
        for(i = 0; i < g58.length; i++) {
            if(g58[i].checked)
            total = total + g58[i].className;        
        }  
    //----------// 
    for(i = 0; i < g59.length; i++) {
        if(g59[i].checked)
        gg59 = parseInt(g59[i].value);
        } 
        for(i = 0; i < g59.length; i++) {
            if(g59[i].checked)
            total = total + g59[i].className;        
        }  
    //----------// 
    for(i = 0; i < g60.length; i++) {
        if(g60[i].checked)
        gg60 = parseInt(g60[i].value);
        } 
        for(i = 0; i < g60.length; i++) {
            if(g60[i].checked)
            total = total + g60[i].className;        
        }  
    //----------// 
    for(i = 0; i < g61.length; i++) {
        if(g61[i].checked)
        gg61 = parseInt(g61[i].value);
        } 
        for(i = 0; i < g61.length; i++) {
            if(g61[i].checked)
            total = total + g61[i].className;        
        }  
    //----------// 
    for(i = 0; i < g62.length; i++) {
        if(g62[i].checked)
        gg62 = parseInt(g62[i].value);
        } 
        for(i = 0; i < g62.length; i++) {
            if(g62[i].checked)
            total = total + g62[i].className;        
        }  
    //----------// 
    for(i = 0; i < g63.length; i++) {
        if(g63[i].checked)
        gg63 = parseInt(g63[i].value);
        } 
        for(i = 0; i < g63.length; i++) {
            if(g63[i].checked)
            total = total + g63[i].className;        
        }  
    //----------// 
    for(i = 0; i < g64.length; i++) {
        if(g64[i].checked)
        gg64 = parseInt(g64[i].value);
        } 
        for(i = 0; i < g64.length; i++) {
            if(g64[i].checked)
            total = total + g64[i].className;        
        }  
    //----------// 
    for(i = 0; i < g65.length; i++) {
        if(g65[i].checked)
        gg65 = parseInt(g65[i].value);
        } 
        for(i = 0; i < g65.length; i++) {
            if(g65[i].checked)
            total = total + g65[i].className;        
        }  
    //----------// 
    for(i = 0; i < g66.length; i++) {
        if(g66[i].checked)
        gg66 = parseInt(g66[i].value);
        } 
        for(i = 0; i < g66.length; i++) {
            if(g66[i].checked)
            total = total + g66[i].className;        
        }  
    //----------// 

    document.getElementById("result").innerHTML= 
        aa03 + aa04 + aa05 +
        bb07 + bb08 + bb09 + bb10 + bb11 + bb12 + bb13 + bb14 + bb15 + bb16 + bb17 +
        cc19 + cc20 + cc21 + cc22 + cc23 + cc24 +
        dd26 + dd27 + dd28 + dd30 + dd31 + dd32 + dd33 + dd34 + dd35 + dd36 + dd37 +
        ee39 + ee40 + ee41 + ee42 + ee43 + ee44 + ee45 + ee46 +
        ff48 + ff49 + ff50 + ff51 + ff52 + ff53 + ff54 + ff56 +
        gg58 + gg59 + gg60 + gg61 + gg62 + gg63 + gg64 + gg65 + gg66;
    document.getElementById("persona").innerHTML= total;
}


