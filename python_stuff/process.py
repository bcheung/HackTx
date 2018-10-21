import json

#class receiptEntry():
#    def __init__(self, item, qnt, price):
#        self.info = {"item" : str(item), "quantity" : int(qnt), "price" : float(price)}
#    def printVal(self):
#        print(self.info["item"],self.info["quantity"], self.info["price"])
def receiptEntry(item, qnt, price):
    entry = {"item" : str(item), "quantity" : int(qnt), "price" : float(price)}
    return entry
class fileProcess():
    def __init__(self, filename):   #should read file into base list
        self.fileList = list()
        self.items = dict()
        self.total = float()
        self.tax = float()
        file = open(str(filename), "r")
        buf = str()

        buf = file.readline()
        while buf != "":
            self.fileList.append(buf)
            buf = file.readline()
        file.close()

    def findItems(self):
        itemCnt = int()
        prices = list()
        lastPrice = int()
        for i in range(len(self.fileList)):
            if self.fileList[i] == "TOTAL\n":
                self.tax = float(self.fileList[i+2])
                self.total = float(self.fileList[i+1])
                break
            elif '.' in self.fileList[i]:
                prices.append(float(self.fileList[i]))
                itemCnt += 1
                lastPrice = i
        for j in range(lastPrice+1, lastPrice + itemCnt+1):
            temp = self.fileList[j].split()
            tempKey = str()
            tempQnt = 1
            if temp[0].isdigit():
                tempQnt = int(temp[0])
            else:
                tempKey = temp[0] 
            for i in range(1, len(temp)):
                tempKey += " " + temp[i]
            self.items[tempKey] = [tempQnt, prices[j-lastPrice-1]]
    def updateItemsTax(self):
        for key in self.items:
            self.items[key][1] += self.tax * self.items[key][1] / self.total


def writeJson(filename, data):
    with open(filename, 'wb') as outfile:
        json.dump(data, outfile)

if __name__ == "__main__":
    file = fileProcess("receipt2.jpeg_en.txt")
    #print(file.fileList)
    file.findItems()
    #print(file.items)
    print("tax is %f" % file.tax)
    print("total is %f" % (file.total + file.tax))
    file.updateItemsTax()
    #print(file.items)
    receiptList = dict()
    receiptList['entries'] = []
    for key in file.items:
        receiptList['entries'].append(receiptEntry(key, file.items[key][0], file.items[key][1]))
    for i in range(len(receiptList['entries'])):
        print(receiptList['entries'][i])
    with open('receipt.json', 'w') as outfile:
        json.dump(receiptList, outfile)
