let friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];

let boroNam = friends[0];
friends.forEach(friend => {
    if (friend.length > boroNam.length) {
        boroNam = friend;
    }
});

console.log(boroNam);