export const getUniqueRecord = (attendanceList) =>{
    const uniqueRecord = []
    const existingUser =new set();

    attendanceList?.forEach(record => {
        if(!existingUser.has(record.studentId)){
            existingUser.add(record.studentId);
            uniqueRecord.push(record);
        }
    });

    return uniqueRecord;
}