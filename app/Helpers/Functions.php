
<?php
/**
 * @return mixed
 */
function getUserFirstRole()
{
    $roles = Auth::user()->roles();
    if ($roles) {
        return $roles->first()->name;
    } else {
        return 'N/A';
    }
}

/**
 * @param $text
 * @param $lang
 * @param $start
 */
function getTranslate($data, $filed, $lang, $start = false)
{
    if ($start) {
        return $data[$lang . '_' . $filed];
    } else {
        return $data[$filed . '_' . $lang];
    }

    return null;
}

/**
 * @param $value
 * @param $length
 * @param $starter
 * @return mixed
 */
function custom($value, $length = 7, $starter = 1)
{
    return $starter . str_pad($value, $length, '0', STR_PAD_LEFT);
}

/**
 * @param $value
 * @param $length
 */
function customRound($value, $length = 2)
{
    return round($value, $length);
}

/**
 * @param $value
 * @param $percent
 * @return mixed
 */
function customPercentage($value, $percent)
{
    return round(($value * ($percent / 100)), 2);
}

/**
 * @param $number
 */
function round_to_2dp($number)
{
    return number_format((float) $number, 2, '.', '');
}

/**
 * @param $start
 * @param $prefix
 * @param $length
 * @return mixed
 */
function customPad($data, $length, $prefix = '')
{
    return $prefix . (str_pad((int) $data, $length, '0', STR_PAD_LEFT));
}

/**
 * @param $NRS
 * @return mixed
 */
function BengaliConvert($NRS)
{
    $englDTN =
        ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri',
        'am', 'pm', 'at', 'st', 'nd', 'rd', 'th',
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    $bangDTN =
        ['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '০',
        'শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার',
        'শনি', 'রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহঃ', 'শুক্র',
        'পূর্বাহ্ণ', 'অপরাহ্ণ', '', '', '', '', '',
        'জানুয়ারি', 'ফেব্রুয়ারি', 'মার্চ', 'এপ্রিল', 'মে', 'জুন', 'জুলাই', 'আগস্ট', 'সেপ্টেম্বর', 'অক্টোবর', 'নভেম্বর', 'ডিসেম্বর',
        'জানু', 'ফেব্রু', 'মার্চ', 'এপ্রি', 'মে', 'জুন', 'জুলা', 'আগ', 'সেপ্টে', 'অক্টো', 'নভে', 'ডিসে'];
    $converted = str_replace($englDTN, $bangDTN, $NRS);
    return $converted;
}
