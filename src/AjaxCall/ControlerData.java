package AjaxCall;

public class ControlerData {

    private String proig_litra;
    private String proig_tlitrou;
    private String proig_euro;
    private String parag_litra;
    private String parag_tlitrou;
    private String parag_euro;
    private String neo_litra;
    private String neo_tlitrou;
    private String neo_euro;
    private String katan_litra;
    private String katan_tlitrou;
    private String katan_euro;

    public ControlerData(String proig_litra, String proig_tlitrou, String proig_euro, String parag_litra, String parag_tlitrou, String parag_euro, String neo_litra, String neo_tlitrou, String neo_euro, String katan_litra, String katan_tlitrou, String katan_euro)
    {
        this.setKatan_euro(katan_euro);
        this.setKatan_litra(katan_litra);
        this.setKatan_tlitrou(katan_tlitrou);
        this.setNeo_euro(neo_euro);
        this.setNeo_litra(neo_litra);
        this.setNeo_tlitrou(neo_tlitrou);
        this.setParag_euro(parag_euro);
        this.setParag_litra(parag_litra);
        this.setParag_tlitrou(parag_tlitrou);
        this.setProig_euro(proig_euro);
        this.setProig_litra(proig_litra);
        this.setProig_tlitrou(proig_tlitrou);
    }

    public ControlerData() {
        //empty constractor we need it!!!!!!!!!!!!!!
    }

    //set
    public void setProig_litra(String proig_litra)
    {
        this.proig_litra = proig_litra;
    }

    public void setProig_tlitrou(String proig_tlitrou)
    {
        this.proig_tlitrou = proig_tlitrou;
    }

    public void setProig_euro(String proig_euro)
    {
        this.proig_euro = proig_euro;
    }

    public void setParag_litra(String parag_litra)
    {
        this.parag_litra = parag_litra;
    }

    public void setParag_tlitrou(String parag_tlitrou)
    {
        this.parag_tlitrou = parag_tlitrou;
    }

    public void setParag_euro(String parag_euro)
    {
        this.parag_euro = parag_euro;
    }

    public void setNeo_litra(String neo_litra)
    {
        this.neo_litra = neo_litra;
    }

    public void setNeo_tlitrou(String neo_tlitrou)
    {
        this.neo_tlitrou = neo_tlitrou;
    }

    public void setNeo_euro(String neo_euro)
    {
        this.neo_euro = neo_euro;
    }

    public void setKatan_litra(String katan_litra)
    {
        this.katan_litra = katan_litra;
    }

    public void setKatan_tlitrou(String katan_tlitrou)
    {
        this.katan_tlitrou = katan_tlitrou;
    }

    public void setKatan_euro(String katan_euro)
    {
        this.katan_euro = katan_euro;
    }

    //get
    public String getProig_litra()
    {
        return proig_litra;
    }

    public String getProig_tlitrou()
    {
        return proig_tlitrou;
    }

    public String getProig_euro()
    {
        return proig_euro;
    }

    public String getParag_litra()
    {
        return parag_litra;
    }

    public String getParag_tlitrou()
    {
        return parag_tlitrou;
    }

    public String getParag_euro()
    {
        return parag_euro;
    }

    public String getNeo_litra()
    {
        return neo_litra;
    }

    public String getNeo_tlitrou()
    {
        return neo_tlitrou;
    }

    public String getNeo_euro()
    {
        return neo_euro;
    }

    public String getKatan_litra()
    {
        return katan_litra;
    }

    public String getKatan_tlitrou()
    {
        return katan_tlitrou;
    }

    public String getKatan_euro()
    {
        return katan_euro;
    }

}
