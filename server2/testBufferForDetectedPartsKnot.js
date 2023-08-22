function prepareDetectedPartsKnotBuffer() {
    let buffer = Buffer.alloc(1024);
    buffer.fill(0);

    //CartId : 255 
    // buffer.fill(cartId,0,255);
    buffer.write("CARTID12", 0);

    //FdrId :64
    // buffer.fill(fdrId,255,319)
    buffer.write("FDRID12", 255);

    //Padding :1
    // buffer.fill(padding,319,320);

    //SetPos :2
    // buffer.fill(setPos,320,322);
    buffer.fill(0x16,320,321);
    buffer.fill(0x00,321,322);

    //UsedLane:2(Integer)
    // buffer.fill(usedLane,322,324);
    buffer.fill(0x02, 322, 323);
    buffer.fill(0x00, 323, 324);

    //OldPartsId: 64
    // buffer.fill(oldPartsId,324,388);
    buffer.write("OLDPARTSID12", 324);

    //OldReelId: 64
    // buffer.fill(oldReelId,388,452);
    buffer.write("OLDREELID12", 388);

    //NewPartsId:64
    // buffer.fill(newPartsId,452,516);
    buffer.write("NEWPARTSID12", 452);

    //NewReelId:64
    // buffer.fill(newReelId,516,580);
    buffer.write("NEWREELID12", 516);

    //NewQuantity:4(Integer)
    // buffer.fill(newQuantity,580,584);
    buffer.fill(0x64, 580, 581);
    buffer.fill(0x00, 581, 582);
    buffer.fill(0x00, 582, 583);
    buffer.fill(0x00, 583, 584);

    //Package:2(Integer)
    // buffer.fill(package,584,586); 
    buffer.fill(0x03, 584, 585);
    buffer.fill(0x00, 585, 586);

    //FdrName:100
    // buffer.fill(fdrName,586,686);
    buffer.write("FDRNAME12", 586);

    //Spare:338
    // buffer.fill(spare,686,1024);
    buffer.write("SPARE", 686);

    return buffer;
}