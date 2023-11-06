import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

class Vertex{
    ArrayList<Vertex> children = new ArrayList<>();
    int in_degree = 0;
    String value = "";

    Vertex(){}

    Vertex(Vertex x){

    }

    public void addChild(Vertex v)
    {
        children.add(v);
        v.in_degree++;
    }

    public String toString()
    {
        String str = "[";
        for(Vertex i : children)
            str += i.value + ", ";
        str+="]";

        return value + " " + in_degree + " " + str;
    }
}

class Graph{
	Vertex vert[];
    
    Graph(int n)
    {
        vert = new Vertex[n];
        for(int i = 0; i < n; i++){
            vert[i] = new Vertex();
            vert[i].value = "" + i;
        }
    }

    Graph(Graph g, Vertex x)
    {
        int index = 0;
        this.vert = new Vertex[g.vert.length - 1];

        for(int i = 0; i < g.vert.length; i++)
        {
            if(g.vert[i] == x) {
                continue;
            }
            //TODO: deep copy of vertex
        }
    }

    public String toString(){
        return Arrays.toString(vert);
    }
}

public class TopoVariations{
    static int total;
    public static void main(String args[])
    {
        Scanner in = new Scanner(System.in);

        int n = in.nextInt();
        boolean adj[][] = new boolean[n][n];

        for(int i = 0; i < adj.length; i++)
        {
            for(int j = 0; j < adj[i].length; j++)
            {
                adj[i][j] = in.nextBoolean();
            }
        }

        Graph g = new Graph(n);

        for(int i = 0; i < adj.length; i++)
        {
            for(int j = 0; j < adj[i].length; j++)
                if(adj[i][j])
                    g.vert[i].addChild(g.vert[j]);
        }

        findTopo(g);
        System.out.println("Total variations: " + total);
        in.close();
    }

    public static void findTopo(Graph g)
    {
        ArrayList<Vertex> v = new ArrayList<>();
        for(Vertex u : g.vert)
            if(u.in_degree <= 0)
                v.add(u);

        System.out.println(v.size() + arrayString(v));

        Graph g1;
        for(int i = 0; i < v.size(); i++)
        {
            Vertex x = v.get(i);
            System.out.print("Vertex: " + x);
            g1 = new Graph(g, x);
            System.out.println("New Graph: " + g1);

            if(g1.vert.length == 0){
                total++;
                System.out.println("VARIATION FOUND!!\n");
                break;
            }

            for(Vertex y : x.children)
                y.in_degree--;

            findTopo(g1);
        }
    }

    public static String arrayString(ArrayList<Vertex> v)
    {
        String str = "[";
        for(Vertex i : v)
            str += i.value + ", ";
        str+="]";
        return str;
    }
}