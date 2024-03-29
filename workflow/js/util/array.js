
Array.prototype.indexOf = function (obj) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == obj) {
            return i;
        }
    }
    return -1;
};

Array.prototype.removeByIndex = function (index) {
    this.splice(index,1);
};

Array.prototype.removeObj = function(obj){
	var index = this.indexOf(obj);
	if (index != -1){
		this.splice(index,1);
	}
};

Array.prototype.size = function () {
    return this.length;
};



