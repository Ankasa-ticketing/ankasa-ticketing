const ubahFormatWaktu = (waktu = '03:00:00') => {
    const waktuArr = waktu.split(':')
    const jam = waktuArr[0]
    const menit = waktuArr[1]
    const waktuBaru = jam + ':' + menit
    return waktuBaru
}

export default ubahFormatWaktu
