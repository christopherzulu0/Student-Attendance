export const getUniqueRecord = (attendanceList) => {
    // Check if attendanceList is an array
    if (!Array.isArray(attendanceList)) {
        // If not an array, return an empty array or handle the error accordingly
        return [];
    }

    const uniqueRecord = [];
    const existingUser = new Set();

    attendanceList.forEach(record => {
        if (!existingUser.has(record.studentId)) {
            existingUser.add(record.studentId);
            uniqueRecord.push(record);
        }
    });

    return uniqueRecord;
}
