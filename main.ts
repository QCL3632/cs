muvision.begin(MuId.Mu00, MuVsMode.kI2CMode)
muvision.visionBegin(MuId.Mu00, MuStatus.Enable, MuVsMessageVisionType.kVisionColorDetect)
basic.forever(function () {
    if (muvision.detected(MuId.Mu00, MuVsMessageVisionType.kVisionColorDetect)) {
        if (muvision.colorBlockDetected(MuId.Mu00, muvision.ColorType.Red)) {
            basic.showIcon(IconNames.Heart)
        }
        if (muvision.colorBlockDetected(MuId.Mu00, muvision.ColorType.Green)) {
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
