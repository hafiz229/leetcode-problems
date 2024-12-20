/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteArr = ransomNote.split("");
    const magazineArr = magazine.split("");

    return ransomNoteArr.every((element) => {
        const index = magazineArr.indexOf(element);
        if(index === -1) return false;

        delete magazineArr[index];
        return true;
    })

    // for(let i=0; i<ransomNote.length; i++) {
    //     const currentIndex = magazine.indexOf(ransomNote[i]);
    //     if(currentIndex === -1) return false;
    //     magazine = magazine.substring(0, currentIndex) + magazine.substring(currentIndex + 1);
    // }

    // return true;
};