export class Regex {
    public static sinCarecteresEspeciales = /^[a-zA-Z0-9_-]+$/;
    public static nombreRegEx = /^[A-Za-zÑÜüñáéíóú' ]{2,}$/;
    public static apellidoRegEx = /^[A-Za-zÑÜüñáéíóú' ]{1,}$/;
    public static celularRegEx = /^[0-9]{10}$/;
    public static curpRegex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0\d|1[0-2])(?:[0-2]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;
    public static hasNumber = /\d/;
    public static hasCapitalCase = /[A-Z]/;
    public static hasSmallCase = /[a-z]/;
    public static hasCharacterCase = /[!¡"#$%&'()*+,\-.\/:;<=>¿?@[\]^_`{|}\\~´¨]/;
}