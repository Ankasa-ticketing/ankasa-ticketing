const ubahFormatWaktu = (waktu) => {
    const waktuArr = waktu.split(':')
    const jam = waktuArr[0]
    const menit = waktuArr[1]
    const waktuBaru = jam + ':' + menit
    return waktuBaru
}

export default ubahFormatWaktu
